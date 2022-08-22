import { Section, Container, Button, useUser, GalleryList } from 'components';
import { db } from 'services/firebase/frebaseConfig';
import { toast } from 'react-toastify';
import { child, get, ref } from 'firebase/database';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const MyLibrary = () => {
  const [filmsByStatus, setFilmsByStatus] = useState([]);
  const [currentStatus, setCurrentStatus] = useState('');
  const { user } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();

  const getFilmsByStatus = async status => {
    try {
      const snapshot = await get(child(ref(db), `/users/${user?.uid}/films`));
      if (snapshot.exists()) {
        const libraryFilms = Object.values(snapshot.val());
        const filteredFilms = libraryFilms.filter(
          film => film[status] === true
        );
        setFilmsByStatus(filteredFilms);
        setCurrentStatus(status);
      }
    } catch (error) {
      toast.error(`We can not receive you watched films`);
    }
  };

  const setSearch = status => {
    setSearchParams(status);
  };

  return (
    <Section>
      <Container>
        <Button
          onClick={() => {
            getFilmsByStatus('watched');
            setSearch({ view: 'watched' });
          }}
        >
          Watched
        </Button>
        <Button
          onClick={() => {
            getFilmsByStatus('queue');
            setSearch({ view: 'queue' });
          }}
        >
          Queue
        </Button>
        {currentStatus}
        {filmsByStatus?.length !== 0 && (
          <GalleryList
            films={filmsByStatus}
            getFilmsByStatus={getFilmsByStatus}
            searchParams={searchParams}
          />
        )}
      </Container>
    </Section>
  );
};
