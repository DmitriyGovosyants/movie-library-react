import { Section, Container, Button, useUser, GalleryList } from 'components';
import { db } from 'services/firebase/frebaseConfig';
import { toast } from 'react-toastify';
import { child, get, ref } from 'firebase/database';
import { useState } from 'react';
// import { useEffect } from 'react';

export const MyLibrary = () => {
  // СДЕЛАТЬ ОБНОВЛЕНИЕ СПИСКА ПРИ УДАЛЕНИИ ИЗ СПИСКА!!!
  const [films, setFilms] = useState([]);
  // const [filmsByStatus, setFilmsByStatus] = useState([]);
  const { user } = useUser();

  const getFilms = async status => {
    try {
      const snapshot = await get(child(ref(db), `/users/${user?.uid}/films`));
      if (snapshot.exists()) {
        const libraryFilms = Object.values(snapshot.val());
        const filteredFilms = libraryFilms.filter(film =>
          film.status.includes(status)
        );
        setFilms(filteredFilms);
      }
    } catch (error) {
      toast.error(`We can not receive you watched films`);
    }
  };

  // useEffect(() => {
  //   const getFilms = async () => {
  //     try {
  //       const snapshot = await get(child(ref(db), `/users/${user?.uid}/films`));
  //       if (snapshot.exists()) {
  //         const loadedFilms = Object.values(snapshot.val());
  //         setFilms(loadedFilms);
  //       }
  //     } catch (error) {
  //       toast.error(`We can not receive you watched films`);
  //     }
  //   };
  //   getFilms();
  // }, [user?.uid]);

  // const getWatched = () => {
  //   const filteredFilms = films.filter(film => film.status.includes('watched'));
  //   setFilmsByStatus(filteredFilms);
  // };

  // const getQueue = () => {
  //   const filteredFilms = films.filter(film => film.status.includes('queue'));
  //   setFilmsByStatus(filteredFilms);
  // };

  // console.dir(films, filmsByStatus);

  return (
    <Section>
      <Container>
        <Button onClick={() => getFilms('watched')}>Watched</Button>
        <Button onClick={() => getFilms('queue')}>Queue</Button>
        {films?.length !== 0 && <GalleryList films={films} />}
      </Container>
    </Section>
  );
};
