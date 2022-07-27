import { useState, useEffect } from 'react';
import { usePrevious } from 'hooks/usePrevious';
import { fetchTrending, fetchMoviesByName } from 'services/filmsApi';
import {
  Container,
  SearchStatusBar,
  ErrorMessage,
  GalleryItem,
  Pagination,
  Loader,
} from 'components';
import { Gallery } from './GalleyList.styled';

export const GalleryList = ({ query }) => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState(null);
  console.log('очередной рендер в компоненте с запросом', films);

  const prevQuery = usePrevious(query);

  useEffect(() => {
    if (query !== '') {
      return;
    }

    const fetch = async () => {
      setShowLoader(true);
      scrollToTop();

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
    if (query !== prevQuery) {
      setFilms([]);
      setPage(1);
      return;
    }

    const fetch = async () => {
      setShowLoader(true);
      scrollToTop();

      try {
        const {
          data: { results, total_pages },
        } = await fetchMoviesByName(page, query);

        setTotalPage(total_pages);
        setFilms([...results]);
        console.log('Получение данных', results.length);
      } catch (e) {
        setError(e.message);
      } finally {
        setShowLoader(false);
      }
    };
    fetch();
  }, [page, query, prevQuery]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  };

  return (
    <Container>
      <SearchStatusBar
        query={query}
        page={page}
        totalPage={totalPage}
        setPage={setPage}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {showLoader && <Loader />}
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
