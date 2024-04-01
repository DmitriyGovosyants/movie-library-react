import PropTypes from 'prop-types';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
import { toast } from 'react-toastify';

import { routesPath } from 'router';
import { ViewConstants } from 'constants/constants';
import noPoster from 'data/movies/no-poster.jpeg';
import { useUser } from 'context/userContext';
import { useSwipe } from 'hooks/useSwipe';
import { fetchMovieDetails, fetchMovieTrailer } from 'services/movieApi';
import {
  fetchLibraryMovieStatus,
  addNewMovieInLibrary,
  addSecondStatus,
  removeFromLibrary,
  removeOneOfTwoStatus,
  updateRating,
} from 'services/libraryApi';
import {
  ErrorMessage,
  Spinner,
  MovieCardControl,
  MovieCardTrailer,
  MovieCardRating,
  MovieCardInfo,
  ButtonClose,
} from 'components';
import {
  MovieCardBox,
  TitleBox,
  Title,
  FlexContainer,
  PosterBox,
  Poster,
  MovieCardContent,
  NavBtn,
} from './MovieCard.styled';

export const MovieCard = ({
  itemId,
  setShowModal,
  setRefreshPage,
  handleChangeMovieCard,
}) => {
  const location = useLocation();
  const { user, userLanguage } = useUser();
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieTrailers, setMovieTrailers] = useState([]);
  const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  const [watchedStatus, setWatchedStatus] = useState(false);
  const [queueStatus, setQueueStatus] = useState(false);
  const [searchParams] = useSearchParams();
  const movieCardRef = useRef(null);

  useEffect(() => {
    setShowLoader(true);

    const fetch = async () => {
      try {
        const { data } = await fetchMovieDetails(itemId, userLanguage.value);
        setMovieDetails(data);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setShowLoader(false);
      }
    };
    fetch();
  }, [itemId, userLanguage.value]);

  useEffect(() => {
    const fetch = async () => {
      const snapshot = await fetchLibraryMovieStatus(user, itemId);
      if (snapshot.exists()) {
        const watchedValue = snapshot.val().watched;
        const queueValue = snapshot.val().queue;
        setWatchedStatus(watchedValue);
        setQueueStatus(queueValue);
      }
    };
    fetch();
  }, [itemId, user]);

  useEffect(() => {
    if (
      location.pathname !== `/${routesPath.library}` ||
      movieDetails.length === 0
    ) {
      return;
    }

    const { vote_average, id } = movieDetails;
    const fetch = async () => {
      try {
        await updateRating(vote_average, user, id);
        setRefreshPage(true);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [location.pathname, movieDetails, setRefreshPage, user]);

  const controlCardSwitch = useCallback(
    payload => {
      handleChangeMovieCard(payload);
      setMovieTrailers([]);
      setError(null);
    },
    [handleChangeMovieCard]
  );

  useSwipe(movieCardRef, controlCardSwitch, movieDetails.length);

  const libraryApi = async status => {
    if (!user) {
      return toast.info('Please, log in');
    }

    const { title, poster_path, vote_average, release_date, genres, id } =
      movieDetails;

    // console.log(1, genres);

    if (!watchedStatus && !queueStatus) {
      const genresIdList = genres.map(genre => genre.id);
      try {
        await addNewMovieInLibrary(
          status,
          user,
          title,
          poster_path,
          vote_average,
          release_date,
          genresIdList,
          id
        );

        status === ViewConstants.WATCHED
          ? setWatchedStatus(true)
          : setQueueStatus(true);
        toast.success(`"${title}" has been added to ${status}`);
      } catch (error) {
        toast.error(`We cannot add "${title}" to ${status}`);
      }
      return;
    }

    if (
      (status === ViewConstants.WATCHED && !watchedStatus && queueStatus) ||
      (status === ViewConstants.QUEUE && watchedStatus && !queueStatus)
    ) {
      try {
        await addSecondStatus(status, title, vote_average, user, id);

        status === ViewConstants.WATCHED
          ? setWatchedStatus(true)
          : setQueueStatus(true);
        toast.success(`"${title}" has been added to ${status}`);
      } catch (error) {
        toast.error(`We cannot add "${title}" to ${status}`);
      }
      return;
    }

    if (watchedStatus && queueStatus) {
      try {
        await removeOneOfTwoStatus(status, user, id);

        status === ViewConstants.WATCHED
          ? setWatchedStatus(false)
          : setQueueStatus(false);
        toast.info(`"${title}" has been deleted from ${status}`);
      } catch (error) {
        toast.error(`We cannot delete "${title}" from ${status}`);
      }
      return;
    }

    if (
      (status === ViewConstants.WATCHED && watchedStatus && !queueStatus) ||
      (status === ViewConstants.QUEUE && !watchedStatus && queueStatus)
    ) {
      try {
        await removeFromLibrary(user, id);
        setWatchedStatus(false);
        setQueueStatus(false);
        toast.info(`"${title}" has been deleted from ${status}`);
      } catch (error) {
        toast.error(`We cannot delete "${title}" from ${status}`);
      }
      return;
    }
  };

  const controlLibrary = status => {
    libraryApi(status);

    if (
      location.pathname === `/${routesPath.library}` &&
      status === searchParams.get('viewing')
    ) {
      setRefreshPage(true);
      setShowModal(false);
    }
  };

  const controlTrailer = async () => {
    if (movieTrailers?.length === 0) {
      try {
        const {
          data: { results },
        } = await fetchMovieTrailer(itemId, userLanguage.value);
        if (results?.length === 0) {
          setError('>> No trailers found <<');
          return;
        }
        setMovieTrailers(results);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setShowLoader(false);
      }
    }

    if (movieTrailers?.length) {
      setMovieTrailers([]);
    }
  };

  const moviePoster = movieDetails?.poster_path
    ? `https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`
    : noPoster;

  return (
    <>
      {showLoader && <Spinner />}
      {movieDetails?.length !== 0 && (
        <MovieCardBox ref={movieCardRef}>
          <TitleBox>
            <Title>{movieDetails?.title}</Title>
          </TitleBox>
          <ButtonClose onClick={() => setShowModal(false)} />
          <FlexContainer>
            <PosterBox>
              <Poster src={moviePoster} alt={movieDetails?.title} />
            </PosterBox>
            <MovieCardContent>
              <MovieCardControl
                queueStatus={queueStatus}
                watchedStatus={watchedStatus}
                controlLibrary={controlLibrary}
                controlTrailer={controlTrailer}
                movieTrailers={movieTrailers}
              />
              {error && <ErrorMessage size={'small'}>{error}</ErrorMessage>}
              {movieTrailers?.length !== 0 && (
                <MovieCardTrailer movieTrailers={movieTrailers} />
              )}
              <MovieCardRating movieDetails={movieDetails} />
              {movieTrailers?.length === 0 && (
                <MovieCardInfo movieDetails={movieDetails} />
              )}
            </MovieCardContent>
          </FlexContainer>
          <NavBtn
            onClick={() => {
              controlCardSwitch(-1);
            }}
            left
          >
            <GoTriangleLeft size={'100'} />
          </NavBtn>
          <NavBtn
            onClick={() => {
              controlCardSwitch(1);
            }}
            rigth
          >
            <GoTriangleRight size={'100'} />
          </NavBtn>
        </MovieCardBox>
      )}
    </>
  );
};

MovieCard.propTypes = {
  itemId: PropTypes.number.isRequired,
  setShowModal: PropTypes.func.isRequired,
  handleChangeMovieCard: PropTypes.func.isRequired,
  setRefreshPage: PropTypes.func,
};
