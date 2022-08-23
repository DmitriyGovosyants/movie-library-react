import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from 'services/firebase/frebaseConfig';
import { ref, set, get, child, update, remove } from 'firebase/database';
import { fetchMovieDetails, fetchMovieTrailer } from 'services/movieApi';
import { FaRegWindowClose } from 'react-icons/fa';
import noPoster from 'data/images/movies/no-poster.jpeg';
import { toast } from 'react-toastify';
import { useUser } from 'context/userContext';
import {
  ErrorMessage,
  Spinner,
  MovieCardControl,
  MovieCardTrailer,
  MovieCardRating,
  MovieCardInfo,
} from 'components';
import {
  MovieCardBox,
  Title,
  ModalCloseBtn,
  FlexContainer,
  PosterBox,
  Poster,
  MovieCardContent,
} from './MovieCard.styled';

export const MovieCard = ({
  itemId,
  setShowModal,
  fetchLibraryMovies,
  searchParams,
}) => {
  const location = useLocation();
  const { user } = useUser();
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieTrailers, setMovieTrailers] = useState([]);
  const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  const [watchedStatus, setWatchedStatus] = useState(false);
  const [queueStatus, setQueueStatus] = useState(false);

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
    const fetchLibraryMovieStatus = async () => {
      const snapshot = await get(
        child(ref(db), `/users/${user?.uid}/movies/${itemId}`)
      );
      if (snapshot.exists()) {
        const watchedValue = snapshot.val().watched;
        const queueValue = snapshot.val().queue;
        setWatchedStatus(watchedValue);
        setQueueStatus(queueValue);
      }
    };
    fetchLibraryMovieStatus();
  }, [itemId, user?.uid]);

  const libraryFirebaseAPI = async status => {
    if (!user) {
      return toast.info('Please, log in');
    }

    const { title, poster_path, vote_average, release_date, genres } =
      movieDetails;
    const genresNames = genres ? genres.map(e => e.name).join(', ') : null;

    if (!watchedStatus && !queueStatus) {
      console.log('Add new movie in library');
      try {
        await set(ref(db, `/users/${user?.uid}/movies/${itemId}`), {
          watched: false,
          queue: false,
          [status]: true,
          [`${status}DateAdded`]: Date.now(),
          id: itemId,
          poster_path,
          title,
          vote_average,
          release_date,
          genres: genresNames,
        });

        status === 'watched' ? setWatchedStatus(true) : setQueueStatus(true);
        toast.success(`"${title}" has been added to ${status}`);
      } catch (error) {
        toast.error(`We cannot add "${title}" to ${status}`);
      }
      return;
    }

    if (
      (status === 'watched' && !watchedStatus && queueStatus) ||
      (status === 'queue' && watchedStatus && !queueStatus)
    ) {
      console.log('Add second status to true');
      try {
        await update(ref(db, `/users/${user?.uid}/movies/${itemId}`), {
          [status]: true,
          [`${status}DateAdded`]: Date.now(),
        });

        status === 'watched' ? setWatchedStatus(true) : setQueueStatus(true);
        toast.success(`"${title}" has been added to ${status}`);
      } catch (error) {
        toast.error(`We cannot add "${title}" to ${status}`);
      }
      return;
    }

    if (watchedStatus && queueStatus) {
      console.log('If all status true - delete one of them');
      try {
        await update(ref(db, `/users/${user?.uid}/movies/${itemId}`), {
          [status]: false,
        });

        status === 'watched' ? setWatchedStatus(false) : setQueueStatus(false);
        toast.info(`"${title}" has been deleted from ${status}`);
      } catch (error) {
        toast.error(`We cannot delete "${title}" from ${status}`);
      }
      return;
    }

    if (
      (status === 'watched' && watchedStatus && !queueStatus) ||
      (status === 'queue' && !watchedStatus && queueStatus)
    ) {
      console.log('Delete from library if all status false');
      try {
        await remove(ref(db, `/users/${user?.uid}/movies/${itemId}`));
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
    libraryFirebaseAPI(status);

    if (location.pathname === '/library') {
      const viewParams = searchParams.get('view');

      if (viewParams === status) {
        fetchLibraryMovies(status);
      }
    }
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
        <MovieCardBox>
          <Title>{movieDetails?.title}</Title>
          <ModalCloseBtn type="button" onClick={() => setShowModal(s => !s)}>
            <FaRegWindowClose size={40} />
          </ModalCloseBtn>
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
        </MovieCardBox>
      )}
    </>
  );
};
