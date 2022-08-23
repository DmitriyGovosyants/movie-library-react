import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Section, Container, Button, MovieList } from 'components';
import { useUser } from 'context/userContext';
import { fetchAllLibraryMovies } from 'services/libraryApi';

export const Library = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [sortStatus, setSortStatus] = useState('date');
  const { user } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchLibraryMovies = async (viewValue, sortValue) => {
    try {
      const snapshot = await fetchAllLibraryMovies(user);
      const moviesByStatus = Object.values(snapshot.val()).filter(
        movie => movie[viewValue] === true
      );

      const sortMovies = sortBy(sortValue, moviesByStatus, viewValue);
      setFilteredMovies(sortMovies);
    } catch (error) {
      toast.info(`You have no movies in ${viewValue}`);
      // setMoviesByStatus([]);
    }
  };

  console.log(sortStatus);

  const sortBy = (sortValue, moviesByStatus, viewValue) => {
    if (sortValue === 'date') {
      return [...moviesByStatus].sort((a, b) => {
        return b[`${viewValue}DateAdded`] - a[`${viewValue}DateAdded`];
      });
    }
    if (sortValue === 'rating') {
      return [...moviesByStatus].sort((a, b) => {
        return b['vote_average'] - a['vote_average'];
      });
    }
    // по году
    // по жанру
  };

  // const sortByDate = (moviesByStatus, viewValue) => {
  //   return [...moviesByStatus].sort((a, b) => {
  //     return b[`${viewValue}DateAdded`] - a[`${viewValue}DateAdded`];
  //   });
  // };

  // const sortByRating = moviesByStatus => {
  //   return [...moviesByStatus].sort((a, b) => {
  //     return b['vote_average'] - a['vote_average'];
  //   });
  // };

  const handleChange = e => {
    const viewValue = searchParams.get('view');
    const sortValue = e.target.value;
    fetchLibraryMovies(viewValue, sortValue);
    setSortStatus(sortValue);
  };

  return (
    <Section>
      <Container>
        <label>
          DATE
          <input
            type="radio"
            checked={sortStatus === 'date'}
            name="sortBy"
            value={'date'}
            onChange={handleChange}
          />
        </label>
        <label>
          RATING
          <input
            type="radio"
            checked={sortStatus === 'rating'}
            name="sortBy"
            value={'rating'}
            onChange={handleChange}
          />
        </label>

        <Button
          onClick={() => {
            setSearchParams({ view: 'queue' });
            fetchLibraryMovies('queue', sortStatus);
          }}
        >
          Queue
        </Button>
        <Button
          onClick={() => {
            setSearchParams({ view: 'watched' });
            fetchLibraryMovies('watched', sortStatus);
          }}
        >
          Watched
        </Button>
        {searchParams.get('view')}
        {filteredMovies?.length !== 0 && (
          <MovieList
            movies={filteredMovies}
            fetchLibraryMovies={fetchLibraryMovies}
            searchParams={searchParams}
          />
        )}
      </Container>
    </Section>
  );
};

export default Library;
