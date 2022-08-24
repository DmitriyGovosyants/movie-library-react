import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Section, Container, Button, MovieList } from 'components';
import { useUser } from 'context/userContext';
import { fetchAllLibraryMovies } from 'services/libraryApi';
import { SortStatus, ViewStatus } from 'constants/constants';
import { useEffect } from 'react';
import { useCallback } from 'react';

export const Library = () => {
  const { user } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();
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
      if (!filterStatus) {
        return sortMovies;
      }

      if (filterStatus) {
        return sortMovies.filter(movie => {
          return movie.genres.includes(filterStatus);
        });
      }
    },
    [filterStatus]
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
      .flatMap(movie => movie.genres.split(','))
      .filter((movie, index, array) => array.indexOf(movie) === index);

    setAllGenres(uniqueGenres);
  };

  return (
    <Section>
      <Container>
        <label>
          LATEST
          <input
            type="radio"
            checked={sortStatus === SortStatus.LATEST}
            name="sortBy"
            value={SortStatus.LATEST}
            onChange={e => setSortStatus(e.target.value)}
          />
        </label>
        <label>
          RATING
          <input
            type="radio"
            checked={sortStatus === SortStatus.RATING}
            name="sortBy"
            value={SortStatus.RATING}
            onChange={e => setSortStatus(e.target.value)}
          />
        </label>
        <label>
          YEAR
          <input
            type="radio"
            checked={sortStatus === SortStatus.YEAR}
            name="sortBy"
            value={SortStatus.YEAR}
            onChange={e => setSortStatus(e.target.value)}
          />
        </label>
        <label>
          Choose genre
          <select
            name="genres"
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
          >
            <option value=""></option>
            {allGenres.map(genre => {
              return (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              );
            })}
            <option value=""> - ALL - </option>
          </select>
        </label>

        <Button onClick={() => setViewStatus(ViewStatus.QUEUE)}>Queue</Button>
        <Button onClick={() => setViewStatus(ViewStatus.WATCHED)}>
          Watched
        </Button>
        {searchParams.get('view')}
        {libraryMovies?.length}
        {libraryMovies?.length !== 0 && (
          <MovieList movies={libraryMovies} setRefreshPage={setRefreshPage} />
        )}
      </Container>
    </Section>
  );
};

export default Library;
