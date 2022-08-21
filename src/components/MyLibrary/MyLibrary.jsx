import { Section, Container, Button, useUser, GalleryList } from 'components';
import { db } from 'services/firebase/frebaseConfig';
import { toast } from 'react-toastify';
import { child, get, ref } from 'firebase/database';
import { useState } from 'react';

export const MyLibrary = () => {
  const [films, setFilms] = useState(null);
  const { user } = useUser();

  const getWatchedFilms = async () => {
    try {
      const snapshot = await get(child(ref(db), `/users/${user?.uid}`));
      if (snapshot.exists()) {
        const loadedFilms = Object.values(snapshot.val().films);
        setFilms(loadedFilms);
      }
    } catch (error) {
      toast.error(`We can not receive you watched films`);
    }
  };

  const getQueueFilms = async () => {
    try {
      const snapshot = await get(child(ref(db), `/users/${user?.uid}`));
      if (snapshot.exists()) {
        const loadedFilms = Object.values(snapshot.val().queue);
        setFilms(loadedFilms);
      }
    } catch (error) {
      toast.error(`We can not receive you queue films`);
    }
  };

  console.dir(films);

  return (
    <Section>
      <Container>
        <Button onClick={getWatchedFilms}>Watched</Button>
        <Button onClick={getQueueFilms}>Queue</Button>
        {films && <GalleryList films={films} />}
      </Container>
    </Section>
  );
};
