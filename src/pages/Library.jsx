import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SortConstants, ViewConstants } from 'constants/constants';
import { useUser } from 'context/userContext';
import { useTMDBData } from 'context/tmdbDataContext';
import { useFiltering } from 'hooks/useFiltering';
import { fetchAllLibraryMovies } from 'services/libraryApi';
import { MovieList, LibraryControlBar } from 'components';
import { Section, Container } from 'layout';

const defaultParams = {
  viewing: ViewConstants.QUEUE,
  sorting: SortConstants.LATEST,
};

export const Library = () => {
  const [searchParams, setSearchParams] = useSearchParams(defaultParams);
  const { user } = useUser();
  const { genresList } = useTMDBData();
  const [libraryMovies, setLibraryMovies] = useState([]);
  const [allGenres, setAllGenres] = useState([]);
  const [refreshPage, setRefreshPage] = useState(false);
  const [filterStatus, setFilterStatus] = useFiltering(searchParams);
  const viewing = searchParams.get('viewing');
  const sorting = searchParams.get('sorting');

  useEffect(() => {
    setSearchParams({
      viewing,
      sorting,
      filtering: filterStatus
        ? `${filterStatus?.value}-${filterStatus?.label}`
        : '',
    });
  }, [filterStatus, setSearchParams, sorting, viewing]);

  const sortBy = useCallback(
    moviesByStatus => {
      if (sorting === SortConstants.LATEST) {
        return [...moviesByStatus].sort(
          (a, b) => b[`${viewing}DateAdded`] - a[`${viewing}DateAdded`]
        );
      }
      if (sorting === SortConstants.RATING) {
        return [...moviesByStatus].sort(
          (a, b) => b.vote_average - a.vote_average
        );
      }
      if (sorting === SortConstants.YEAR) {
        return [...moviesByStatus].sort((a, b) =>
          b.release_date.localeCompare(a.release_date)
        );
      }
    },
    [sorting, viewing]
  );

  const filterBy = useCallback(
    sortMovies => {
      if (!filterStatus?.value) {
        return sortMovies;
      }

      if (filterStatus?.value) {
        return sortMovies.filter(movie => {
          return movie.genres.includes(filterStatus.value);
        });
      }
    },
    [filterStatus?.value]
  );

  useEffect(() => {
    const fetchLibraryMovies = async () => {
      setRefreshPage(false);

      try {
        const snapshot = await fetchAllLibraryMovies(user);
        const moviesByStatus = Object.values(snapshot.val()).filter(
          movie => movie[viewing] === true
        );

        getUniqueGenres(moviesByStatus, genresList);
        const sortMovies = sortBy(moviesByStatus);
        const filterMovies = filterBy(sortMovies);
        setLibraryMovies(filterMovies);
      } catch (error) {
        toast.info(`You have no movies in ${viewing}`);
        setLibraryMovies([]);
      }
    };
    fetchLibraryMovies();
  }, [filterBy, filterStatus, genresList, refreshPage, sortBy, user, viewing]);

  const getUniqueGenres = (movieArr, genresList) => {
    const uniqueGenres = movieArr
      .flatMap(movie => movie.genres)
      .filter((genreID, index, array) => array.indexOf(genreID) === index)
      .map(genreID => genresList.find(({ id }) => id === genreID));

    setAllGenres(uniqueGenres);
  };

  return (
    <Section>
      <Container>
        <LibraryControlBar
          sorting={sorting}
          viewing={viewing}
          setSearchParams={setSearchParams}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          allGenres={allGenres}
          libraryMovies={libraryMovies}
        />

        {libraryMovies?.length !== 0 && (
          <MovieList movies={libraryMovies} setRefreshPage={setRefreshPage} />
        )}
      </Container>
    </Section>
  );
};

export default Library;
