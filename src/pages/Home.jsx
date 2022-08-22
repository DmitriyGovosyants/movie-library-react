import { useState, useEffect } from 'react';
import { usePrevious } from 'hooks/usePrevious';
import { fetchMoviesOnTrend, fetchMoviesByName } from 'services/movieApi';
import { scrollToTop } from 'helpers/srcollToTop';
import {
  Section,
  Container,
  SearchStatusBar,
  ErrorMessage,
  MovieList,
  Pagination,
  Spinner,
} from 'components';

const Home = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
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
        } = await fetchMoviesOnTrend(page);
        setTotalPage(total_pages);
        setMovies([...results]);
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
      setMovies([]);
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
        setMovies([...results]);
      } catch (e) {
        setError(e.message);
      } finally {
        setShowLoader(false);
      }
    };
    fetch();
  }, [page, search, prevQuery]);

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
        {movies.length !== 0 && <MovieList movies={movies} />}
        {movies.length > 0 && (
          <Pagination setPage={setPage} page={page} totalPage={totalPage} />
        )}
      </Container>
    </Section>
  );
};

export default Home;
