import { useState, useEffect, useCallback } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { fetchMovieDetails, fetchMovieTrailer } from 'services/movieApi';
import {
  fetchLibraryMovieStatus,
  addNewMovieInLibrary,
  addSecondStatus,
  removeFromLibrary,
  removeOneOfTwoStatus,
} from 'services/libraryApi';
import { ViewStatus } from 'constants/constants';
import noPoster from 'data/images/movies/no-poster.jpeg';
import { toast } from 'react-toastify';
import { useUser } from 'hooks/userContext';
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
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
import { useRef } from 'react';
import { useSwipe } from 'hooks/useSwipe';

export const MovieCard = ({
  itemId,
  setShowModal,
  setRefreshPage,
  handleChangeMovieCard,
}) => {
  const location = useLocation();
  const { user } = useUser();
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieTrailers, setMovieTrailers] = useState([]);
  const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  const [watchedStatus, setWatchedStatus] = useState(false);
  const [queueStatus, setQueueStatus] = useState(false);
  const [searchParams] = useSearchParams();
  const movieCardRef = useRef(null);

  const controlCardSwitch = useCallback(
    payload => {
      handleChangeMovieCard(payload);
      setMovieTrailers([]);
      setError(null);
    },
    [handleChangeMovieCard]
  );

  useEffect(() => {
    setShowLoader(true);

    const fetch = async () => {
      try {
        const { data } = await fetchMovieDetails(itemId);
        setMovieDetails(data);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setShowLoader(false);
      }
    };
    fetch();
  }, [itemId]);

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

  useSwipe(movieCardRef, controlCardSwitch, movieDetails.length);

  const libraryApi = async status => {
    if (!user) {
      return toast.info('Please, log in');
    }

    const { title, poster_path, vote_average, release_date, genres, id } =
      movieDetails;

    const genresIdList = genres.map(genre => genre.id);
    // const genresNames = genres ? genres.map(e => e.name).join(', ') : null;

    if (!watchedStatus && !queueStatus) {
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

        status === ViewStatus.WATCHED
          ? setWatchedStatus(true)
          : setQueueStatus(true);
        toast.success(`"${title}" has been added to ${status}`);
      } catch (error) {
        toast.error(`We cannot add "${title}" to ${status}`);
      }
      return;
    }

    if (
      (status === ViewStatus.WATCHED && !watchedStatus && queueStatus) ||
      (status === ViewStatus.QUEUE && watchedStatus && !queueStatus)
    ) {
      try {
        await addSecondStatus(status, user, id);

        status === ViewStatus.WATCHED
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

        status === ViewStatus.WATCHED
          ? setWatchedStatus(false)
          : setQueueStatus(false);
        toast.info(`"${title}" has been deleted from ${status}`);
      } catch (error) {
        toast.error(`We cannot delete "${title}" from ${status}`);
      }
      return;
    }

    if (
      (status === ViewStatus.WATCHED && watchedStatus && !queueStatus) ||
      (status === ViewStatus.QUEUE && !watchedStatus && queueStatus)
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

  const refreshLibraryPage = status => {
    if (location.pathname === '/library') {
      const viewParams = searchParams.get('view');

      if (viewParams === status) {
        setRefreshPage(true);
        setShowModal(false);
      }
    }
  };

  const controlLibrary = status => {
    libraryApi(status);
    refreshLibraryPage(status);
  };

  const controlTrailer = async () => {
    if (movieTrailers?.length === 0) {
      try {
        const {
          data: { results },
        } = await fetchMovieTrailer(itemId);
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
