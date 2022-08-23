import { db } from 'services/firebase/frebaseConfig';
import { child, get, ref } from 'firebase/database';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Section, Container, Button, MovieList } from 'components';
import { useUser } from 'context/userContext';

export const Library = () => {
  const [moviesByStatus, setMoviesByStatus] = useState([]);
  const [currentStatus, setCurrentStatus] = useState('');
  const { user } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchLibraryMovies = async status => {
    try {
      const snapshot = await get(child(ref(db), `/users/${user?.uid}/movies`));
      const allMovies = Object.values(snapshot.val());
      const moviesByStatus = allMovies
        .filter(movie => movie[status] === true)
        .sort((a, b) => b[`${status}DateAdded`] - a[`${status}DateAdded`]);

      setMoviesByStatus(moviesByStatus);
      setCurrentStatus(status);
    } catch (error) {
      toast.info(`You have no movies in ${status}`);
    }
  };

  return (
    <Section>
      <Container>
        <Button
          onClick={() => {
            fetchLibraryMovies('queue');
            setSearchParams({ view: 'queue' });
          }}
        >
          Queue
        </Button>
        <Button
          onClick={() => {
            fetchLibraryMovies('watched');
            setSearchParams({ view: 'watched' });
          }}
        >
          Watched
        </Button>
        {currentStatus}
        {moviesByStatus?.length !== 0 && (
          <MovieList
            movies={moviesByStatus}
            fetchLibraryMovies={fetchLibraryMovies}
            searchParams={searchParams}
          />
        )}
      </Container>
    </Section>
  );
};

export default Library;
