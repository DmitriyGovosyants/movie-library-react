import { useState, useEffect } from 'react';
import { fetchTrending, fetchMoviesByName } from 'services/filmsApi';
import {
  Container,
  GalleryItem,
  Pagination,
  ErrorMessage,
  Modal,
  Loader,
} from 'components';
import { Gallery, SearchStatusBar } from './GalleyList.styled';

export const GalleryList = ({ query }) => {
  const [films, setFilms] = useState([]);
  const [queryKey, setQueryKey] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState(null);
  console.log('очередной рендер в компоненте с запросом', films);

  useEffect(() => {
    if (query !== '') {
      return;
    }
    setShowLoader(true);

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
      } finally {
        setShowLoader(false);
      }
    };
    fetch();
  }, [page, query]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    if (query !== queryKey) {
      setQueryKey(query);
      setFilms([]);
      setPage(1);
      return;
    }
    setShowLoader(true);

    const fetch = async () => {
      try {
        const {
          data: { results, total_pages },
        } = await fetchMoviesByName(page, query);

        setTotalPage(total_pages);
        setFilms([...results]);
        // console.log('Получение данных', results.length);
      } catch (e) {
        setError(e.message);
      } finally {
        setShowLoader(false);
      }
    };
    fetch();
  }, [page, query, queryKey]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [page, query]);

  return (
    <Container>
      {query ? (
        <SearchStatusBar>{query}</SearchStatusBar>
      ) : (
        <SearchStatusBar>Trending movie</SearchStatusBar>
      )}
      {showLoader && (
        <Modal>
          <Loader />
        </Modal>
      )}
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
                g
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
