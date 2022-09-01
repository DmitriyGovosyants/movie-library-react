import { useState, useEffect, useCallback } from 'react';
import { usePrevious } from 'hooks/usePrevious';
import {
  fetchMoviesOnTrend,
  fetchMovieTopRated,
  fetchMoviesByName,
  fetchMoviesByGenre,
} from 'services/movieApi';
import { scrollToTop } from 'helpers/srcollToTop';
import { HomeControlBar, MovieList, Pagination, Spinner } from 'components';
import { Section, Container } from 'layout';
import { useUser } from 'context/userContext';
import { SortConstants } from 'constants/constants';
import { toast } from 'react-toastify';

const Home = () => {
  const [sortStatus, setSortStatus] = useState(SortConstants.TREND);
  const [filterStatus, setFilterStatus] = useState(null);
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const prevQuery = usePrevious(search);
  const { userLanguage } = useUser();

  console.log(sortStatus, filterStatus, search);

  const getMoviesOnTrend = useCallback(async () => {
    setShowLoader(true);
    scrollToTop();

    try {
      const {
        data: { results, total_pages },
      } = await fetchMoviesOnTrend(page, userLanguage.value);

      setTotalPage(total_pages);
      setMovies([...results]);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setShowLoader(false);
    }
  }, [page, userLanguage.value]);

  const getMoviesTopRated = useCallback(async () => {
    setShowLoader(true);
    scrollToTop();

    try {
      const {
        data: { results, total_pages },
      } = await fetchMovieTopRated(page, userLanguage.value);

      setTotalPage(total_pages);
      setMovies([...results]);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setShowLoader(false);
    }
  }, [page, userLanguage.value]);

  const getMoviesByGenre = useCallback(async () => {
    setShowLoader(true);
    scrollToTop();

    let extraSortStatus;
    if (sortStatus === SortConstants.TREND) {
      extraSortStatus = 'popularity.desc';
    }
    if (sortStatus === SortConstants.RATING) {
      extraSortStatus = 'vote_average.desc';
    }

    try {
      const {
        data: { results, total_pages },
      } = await fetchMoviesByGenre(
        page,
        userLanguage.value,
        filterStatus.value,
        extraSortStatus
      );

      setTotalPage(total_pages);
      setMovies([...results]);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setShowLoader(false);
    }
  }, [filterStatus?.value, page, sortStatus, userLanguage?.value]);

  const getMoviesByName = useCallback(async () => {
    if (search !== prevQuery) {
      setMovies([]);
      setPage(1);
      setFilterStatus(null);
      return;
    }

    const fetch = async () => {
      setShowLoader(true);
      scrollToTop();

      try {
        const {
          data: { results, total_pages },
        } = await fetchMoviesByName(page, search, userLanguage.value);

        setTotalPage(total_pages);
        setMovies([...results]);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setShowLoader(false);
      }
    };
    fetch();
  }, [page, prevQuery, search, userLanguage.value]);

  useEffect(() => {
    if (sortStatus === SortConstants.TREND && !filterStatus) {
      getMoviesOnTrend();
      return;
    }
    if (sortStatus === SortConstants.RATING && !filterStatus) {
      getMoviesTopRated();
      return;
    }
    if (sortStatus !== SortConstants.SEARCH && filterStatus) {
      getMoviesByGenre();
      return;
    }
    if (sortStatus === SortConstants.SEARCH) {
      getMoviesByName();
      return;
    }
  }, [
    filterStatus,
    getMoviesByGenre,
    getMoviesByName,
    getMoviesOnTrend,
    getMoviesTopRated,
    sortStatus,
  ]);

  return (
    <Section>
      <Container>
        <HomeControlBar
          sortStatus={sortStatus}
          setSortStatus={setSortStatus}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          search={search}
          setSearch={setSearch}
          setPage={setPage}
          page={page}
          totalPage={totalPage}
        />
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
