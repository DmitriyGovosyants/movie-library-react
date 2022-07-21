import { useState, useEffect } from 'react';
import { Container, GalleryItem, Pagination, ErrorMessage } from 'components';
import { fetchTrending } from 'services/filmsApi';
import { Gallery } from './GalleyList.styled';

export const GalleryList = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, [page]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [page]);

  return (
    <Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Gallery>
        {films.map(
          ({ id, poster_path, original_title, vote_average, release_date }) => {
            return (
              <GalleryItem
                key={id}
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
