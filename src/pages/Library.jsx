import { Section, Container, Button, useUser, MovieList } from 'components';
import { db } from 'services/firebase/frebaseConfig';
import { toast } from 'react-toastify';
import { child, get, ref } from 'firebase/database';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Library = () => {
  const [moviesByStatus, setMoviesByStatus] = useState([]);
  const [currentStatus, setCurrentStatus] = useState('');
  const { user } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();

  const getMoviesByStatus = async status => {
    try {
      const snapshot = await get(child(ref(db), `/users/${user?.uid}/movies`));
      const allMovies = Object.values(snapshot.val());
      const moviesByStatus = allMovies.filter(movie => movie[status] === true);
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
            getMoviesByStatus('queue');
            setSearchParams({ view: 'queue' });
          }}
        >
          Queue
        </Button>
        <Button
          onClick={() => {
            getMoviesByStatus('watched');
            setSearchParams({ view: 'watched' });
          }}
        >
          Watched
        </Button>
        {currentStatus}
        {moviesByStatus?.length !== 0 && (
          <MovieList
            movies={moviesByStatus}
            getMoviesByStatus={getMoviesByStatus}
            searchParams={searchParams}
          />
        )}
      </Container>
    </Section>
  );
};

export default Library;
