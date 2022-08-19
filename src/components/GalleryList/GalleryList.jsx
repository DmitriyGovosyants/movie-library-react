import { useState, useEffect } from 'react';
import { usePrevious } from 'hooks/usePrevious';
import { fetchTrending, fetchMoviesByName } from 'services/filmsApi';
import {
  Section,
  Container,
  SearchStatusBar,
  ErrorMessage,
  GalleryItem,
  Pagination,
  Spinner,
} from 'components';
import { Gallery } from './GalleyList.styled';

export const GalleryList = () => {
  const [search, setSearch] = useState('');
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState(null);

  const prevQuery = usePrevious(search);

  useEffect(() => {
    if (search !== '') {
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
      } catch (e) {
        setError(e.message);
      } finally {
        setShowLoader(false);
      }
    };
    fetch();
  }, [page, search]);

  useEffect(() => {
    if (search === '') {
      return;
    }
    if (search !== prevQuery) {
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
        } = await fetchMoviesByName(page, search);

        setTotalPage(total_pages);
        setFilms([...results]);
      } catch (e) {
        setError(e.message);
      } finally {
        setShowLoader(false);
      }
    };
    fetch();
  }, [page, search, prevQuery]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  };

  return (
    <Section>
      <Container>
        <SearchStatusBar
          setSearch={setSearch}
          search={search}
          page={page}
          totalPage={totalPage}
          setPage={setPage}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {showLoader && <Spinner />}
        <Gallery>
          {films.map(
            ({
              id,
              poster_path,
              original_title,
              vote_average,
              release_date,
            }) => {
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
    </Section>
  );
};
