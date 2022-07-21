import { useState, useEffect } from 'react';
import { Container, GalleryItem, Pagination, ErrorMessage } from 'components';
import { fetchTrending, fetchMoviesByName } from 'services/filmsApi';
import { Gallery } from './GalleyList.styled';

export const GalleryList = ({ query }) => {
  const [films, setFilms] = useState([]);
  const [keyw, setKeyw] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [error, setError] = useState(null);
  console.log('очередной рендер в компоненте с запросом', films[0]);

  useEffect(() => {
    if (query !== '') {
      return;
    }
    const fetch = async () => {
      try {
        const {
          data: { results, total_pages },
        } = await fetchTrending(page);

        setTotalPage(total_pages);
        setFilms([...results]);
        console.log(results);
      } catch (e) {
        setError(e.message);
      }
    };
    fetch();
  }, [page, query]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    if (query !== keyw) {
      setKeyw(query);
      setFilms([]);
      setPage(1);
      return;
    }
    const fetch = async () => {
      try {
        const {
          data: { results, total_pages },
        } = await fetchMoviesByName(page, query);

        setTotalPage(total_pages);
        setFilms([...results]);
        console.log('Получение данных', results.length);
      } catch (e) {
        setError(e.message);
      }
    };
    fetch();
  }, [page, query, keyw]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [page, query]);

  return (
    <Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Gallery>
        {films.map(
          ({ id, poster_path, original_title, vote_average, release_date }) => {
            return (
              <GalleryItem
                key={id}
                id={id}
                poster={poster_path}
                title={original_title}
                rating={vote_average}
                data={release_date}
              />
            );
          }
        )}
      </Gallery>
      {films.length > 0 && (
        <Pagination setPage={setPage} page={page} totalPage={totalPage} />
      )}
    </Container>
  );
};
