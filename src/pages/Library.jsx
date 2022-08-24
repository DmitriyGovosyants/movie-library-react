import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Section, Container, Button, MovieList } from 'components';
import { useUser } from 'context/userContext';
import { fetchAllLibraryMovies } from 'services/libraryApi';
import { SortStatus } from 'constants/constants';

export const Library = () => {
  const [libraryMovies, setLibraryMovies] = useState([]);
  const [sortStatus, setSortStatus] = useState(SortStatus.LATEST);
  const [filterStatus, setFilterStatus] = useState('');
  const [allGenres, setAllGenres] = useState([]);
  const { user } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchLibraryMovies = async (viewStatus, sortStatus, filterStatus) => {
    setSearchParams({ view: viewStatus });
    try {
      const snapshot = await fetchAllLibraryMovies(user);
      const moviesByStatus = Object.values(snapshot.val()).filter(
        movie => movie[viewStatus] === true
      );

      const sortMovies = sortBy(sortStatus, moviesByStatus, viewStatus);

      const genres = sortMovies
        .flatMap(movie => movie.genres.split(','))
        .filter((movie, index, array) => array.indexOf(movie) === index);
      setAllGenres(genres);

      if (filterStatus) {
        const filterMovies = filterBy(sortMovies, filterStatus);
        setLibraryMovies(filterMovies);
      }

      if (!filterStatus) {
        setLibraryMovies(sortMovies);
      }
    } catch (error) {
      toast.info(`You have no movies in ${viewStatus}`);
      setLibraryMovies([]);
    }
  };

  const sortBy = (sortStatus, moviesByStatus, viewStatus) => {
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
  };

  const filterBy = (sortMovies, filterStatus) => {
    return sortMovies.filter(movie => {
      return movie.genres.includes(filterStatus);
    });
  };

  const handleSortChange = e => {
    const viewValue = searchParams.get('view');
    const sortValue = e.target.value;
    fetchLibraryMovies(viewValue, sortValue, filterStatus);
    setSortStatus(sortValue);
  };

  const handleGenreChange = e => {
    const viewValue = searchParams.get('view');
    const filterValue = e.target.value;
    fetchLibraryMovies(viewValue, sortStatus, filterValue);
    setFilterStatus(filterValue);
  };

  console.log('STATUS: ', filterStatus);

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
            onChange={handleSortChange}
          />
        </label>
        <label>
          RATING
          <input
            type="radio"
            checked={sortStatus === SortStatus.RATING}
            name="sortBy"
            value={SortStatus.RATING}
            onChange={handleSortChange}
          />
        </label>
        <label>
          YEAR
          <input
            type="radio"
            checked={sortStatus === SortStatus.YEAR}
            name="sortBy"
            value={SortStatus.YEAR}
            onChange={handleSortChange}
          />
        </label>
        <label>
          Choose genre
          <select
            name="genres"
            value={filterStatus}
            onChange={handleGenreChange}
          >
            <option value=""></option>
            {allGenres.map(genre => {
              return (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              );
            })}
          </select>
        </label>

        <Button
          onClick={() => fetchLibraryMovies('queue', sortStatus, filterStatus)}
        >
          Queue
        </Button>
        <Button
          onClick={() =>
            fetchLibraryMovies('watched', sortStatus, filterStatus)
          }
        >
          Watched
        </Button>
        {searchParams.get('view')}
        {libraryMovies?.length}
        {libraryMovies?.length !== 0 && (
          <MovieList
            movies={libraryMovies}
            fetchLibraryMovies={fetchLibraryMovies}
            searchParams={searchParams}
            sortStatus={sortStatus}
            filterStatus={filterStatus}
          />
        )}
      </Container>
    </Section>
  );
};

export default Library;
