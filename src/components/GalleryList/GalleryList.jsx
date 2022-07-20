import { useState, useEffect } from 'react';
import { Container, GalleryItem } from 'components';
import { fetchTrending } from 'services/filmsApi';
import { Gallery } from './GalleyList.styled';

export const GalleryList = () => {
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const {
          data: { results },
        } = await fetchTrending(page);

        setFilms([...results]);
        console.log(results);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [page]);

  return (
    <Container>
      <Gallery>
        {films.map(({ poster_path, original_title, id }) => {
          return (
            <GalleryItem key={id} poster={poster_path} title={original_title} />
          );
        })}
      </Gallery>
    </Container>
  );
};
