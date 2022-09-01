import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SortConstants } from 'constants/constants';
import { scrollToTop } from 'helpers/srcollToTop';
import { useUser } from 'context/userContext';
import { usePrevious } from 'hooks/usePrevious';
import { useFiltering } from 'hooks/useFiltering';
import {
  fetchMoviesOnTrend,
  fetchMovieTopRated,
  fetchMoviesByName,
  fetchMoviesByGenre,
} from 'services/movieApi';
import { HomeControlBar, MovieList, Pagination, Spinner } from 'components';
import { Section, Container } from 'layout';

const defaultParams = {
  sorting: SortConstants.TREND,
};

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams(defaultParams);
  const [search, setSearch] = useState(() => searchParams.get('search') ?? '');
  const [page, setPage] = useState(Number(searchParams.get('page') ?? 1));
  const [filterStatus, setFilterStatus] = useFiltering(searchParams);
  const [movies, setMovies] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const prevQuery = usePrevious(search);
  const { userLanguage } = useUser();
  const sorting = searchParams.get('sorting');

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
    if (sorting === SortConstants.TREND) {
      extraSortStatus = 'popularity.desc';
    }
    if (sorting === SortConstants.RATING) {
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
  }, [filterStatus?.value, page, sorting, userLanguage?.value]);

  const getMoviesByName = useCallback(async () => {
    if (search !== prevQuery) {
      setMovies([]);
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
  }, [page, prevQuery, search, setFilterStatus, userLanguage.value]);

  useEffect(() => {
    setSearchParams({
      sorting,
      search,
      filtering: filterStatus
        ? `${filterStatus?.value}-${filterStatus?.label}`
        : '',
      page: page,
    });
  }, [filterStatus, page, search, setSearchParams, sorting]);

  useEffect(() => {
    if (sorting === SortConstants.TREND && !filterStatus) {
      getMoviesOnTrend();
      return;
    }
    if (sorting === SortConstants.RATING && !filterStatus) {
      getMoviesTopRated();
      return;
    }
    if (sorting !== SortConstants.SEARCH && filterStatus) {
      getMoviesByGenre();
      return;
    }
    if (sorting === SortConstants.SEARCH) {
      getMoviesByName();
      return;
    }
  }, [
    filterStatus,
    getMoviesByGenre,
    getMoviesByName,
    getMoviesOnTrend,
    getMoviesTopRated,
    sorting,
  ]);

  return (
    <Section>
      <Container>
        <HomeControlBar
          sorting={sorting}
          setSearchParams={setSearchParams}
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
