import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Section, Container, MovieList, LibraryControlBar } from 'components';
import { useUser } from 'context/userContext';
import { fetchAllLibraryMovies } from 'services/libraryApi';
import { SortStatus, ViewStatus } from 'constants/constants';
import { useEffect } from 'react';
import { useCallback } from 'react';

export const Library = () => {
  const { user } = useUser();
  const [, setSearchParams] = useSearchParams();
  const [libraryMovies, setLibraryMovies] = useState([]);
  const [allGenres, setAllGenres] = useState([]);
  const [viewStatus, setViewStatus] = useState(ViewStatus.QUEUE);
  const [sortStatus, setSortStatus] = useState(SortStatus.LATEST);
  const [filterStatus, setFilterStatus] = useState('');
  const [refreshPage, setRefreshPage] = useState(false);

  const sortBy = useCallback(
    moviesByStatus => {
      if (sortStatus === SortStatus.LATEST) {
        return [...moviesByStatus].sort(
          (a, b) => b[`${viewStatus}DateAdded`] - a[`${viewStatus}DateAdded`]
        );
      }
      if (sortStatus === SortStatus.RATING) {
        return [...moviesByStatus].sort(
          (a, b) => b.vote_average - a.vote_average
        );
      }
      if (sortStatus === SortStatus.YEAR) {
        return [...moviesByStatus].sort((a, b) =>
          b.release_date.localeCompare(a.release_date)
        );
      }
    },
    [sortStatus, viewStatus]
  );

  const filterBy = useCallback(
    sortMovies => {
      if (!filterStatus.value) {
        return sortMovies;
      }

      if (filterStatus.value) {
        return sortMovies.filter(movie => {
          return movie.genres.includes(filterStatus.value);
        });
      }
    },
    [filterStatus.value]
  );

  useEffect(() => {
    const fetchLibraryMovies = async () => {
      setRefreshPage(false);
      setSearchParams({ view: viewStatus });

      try {
        const snapshot = await fetchAllLibraryMovies(user);
        const moviesByStatus = Object.values(snapshot.val()).filter(
          movie => movie[viewStatus] === true
        );

        getUniqueGenres(moviesByStatus);
        const sortMovies = sortBy(moviesByStatus);
        const filterMovies = filterBy(sortMovies);
        setLibraryMovies(filterMovies);
      } catch (error) {
        toast.info(`You have no movies in ${viewStatus}`);
        setLibraryMovies([]);
      }
    };
    fetchLibraryMovies();
  }, [
    filterBy,
    filterStatus,
    refreshPage,
    setSearchParams,
    sortBy,
    user,
    viewStatus,
  ]);

  const getUniqueGenres = movieArr => {
    const uniqueGenres = movieArr
      .flatMap(movie => movie.genres.split(', '))
      .filter((movie, index, array) => array.indexOf(movie) === index)
      .sort((a, b) => a.localeCompare(b));

    setAllGenres(uniqueGenres);
  };

  return (
    <Section>
      <Container>
        <LibraryControlBar
          sortStatus={sortStatus}
          setSortStatus={setSortStatus}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          viewStatus={viewStatus}
          setViewStatus={setViewStatus}
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
