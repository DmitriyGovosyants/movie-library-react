import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from 'services/firebase/frebaseConfig';
import { ref, set, get, child, update, remove } from 'firebase/database';
import { fetchMovieDetails, fetchMovieTrailer } from 'services/filmsApi';
import { FaRegWindowClose } from 'react-icons/fa';
import noPoster from 'data/images/gallery/no-poster.jpeg';
import { toast } from 'react-toastify';
import {
  ErrorMessage,
  Spinner,
  MovieCardTrailer,
  MovieCardInfo,
  Button,
  useUser,
} from 'components';
import {
  MovieCardBox,
  Title,
  ModalCloseBtn,
  MovieCardWrapper,
  PosterBox,
  Poster,
  MovieCardContent,
  ButtonList,
  ButtonItem,
} from './MovieCard.styled';

export const MovieCard = ({
  itemId,
  itemTitle,
  itemRating,
  itemData,
  itemPoster,
  setShowModal,
  getFilmsByStatus,
  searchParams,
}) => {
  const location = useLocation();
  const { user } = useUser();
  const [movieDetails, setMovieDetails] = useState([]);
  const [trailersInfo, setTrailersInfo] = useState([]);
  const [trailerActiveIndex, setTrailerActiveIndex] = useState(0);
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
    const getFilmStatus = async () => {
      try {
        const snapshot = await get(
          child(ref(db), `/users/${user?.uid}/films/${itemId}`)
        );
        if (snapshot.exists()) {
          const watchedValue = snapshot.val().watched;
          const queueValue = snapshot.val().queue;
          setWatchedStatus(watchedValue);
          setQueueStatus(queueValue);
        }
      } catch (error) {}
    };
    getFilmStatus();
  }, [itemId, user?.uid]);

  const {
    title,
    poster_path,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
    release_date,
  } = movieDetails;

  const filmPoster = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : noPoster;

  const libraryFirebaseAPI = async status => {
    if (!user) {
      return toast.info('Please, log in');
    }
    if (!watchedStatus && !queueStatus) {
      console.log('Add new film in library');
      try {
        await set(ref(db, `/users/${user?.uid}/films/${itemId}`), {
          watched: false,
          queue: false,
          [status]: true,
          id: itemId,
          poster_path: itemPoster,
          title: itemTitle,
          vote_average: itemRating,
          release_date: itemData,
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
        await update(ref(db, `/users/${user?.uid}/films/${itemId}`), {
          [status]: false,
        });

        status === 'watched' ? setWatchedStatus(false) : setQueueStatus(false);
        toast.success(`"${title}" has been deleted from ${status}`);
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
        await remove(ref(db, `/users/${user?.uid}/films/${itemId}`));
        setWatchedStatus(false);
        setQueueStatus(false);
        toast.success(`"${title}" has been deleted from ${status}`);
      } catch (error) {
        toast.error(`We cannot delete "${title}" from ${status}`);
      }
      return;
    }

    console.log('Update 2-d status to true');
    try {
      await update(ref(db, `/users/${user?.uid}/films/${itemId}`), {
        [status]: true,
      });

      status === 'watched' ? setWatchedStatus(true) : setQueueStatus(true);
      toast.success(`"${title}" has been added to ${status}`);
    } catch (error) {
      toast.error(`We cannot add "${title}" to ${status}`);
    }
  };

  const controlLibrary = status => {
    libraryFirebaseAPI(status);

    if (location.pathname === '/library') {
      const gets = searchParams.get('view');

      if (gets === status) {
        getFilmsByStatus(status);
      }
    }
  };

  const controlTrailer = async () => {
    if (trailersInfo?.length === 0) {
      try {
        const {
          data: { results },
        } = await fetchMovieTrailer(itemId);
        if (results?.length === 0) {
          setError('>> No trailers found <<');
          return;
        }
        setTrailersInfo(results);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setShowLoader(false);
      }
    }

    if (trailersInfo?.length) {
      setTrailersInfo([]);
    }
  };

  return (
    <>
      {showLoader && <Spinner />}
      {movieDetails?.length !== 0 && (
        <MovieCardBox>
          <Title>{title}</Title>
          <ModalCloseBtn type="button" onClick={() => setShowModal(s => !s)}>
            <FaRegWindowClose size={40} />
          </ModalCloseBtn>
          <MovieCardWrapper>
            <PosterBox>
              <Poster src={filmPoster} alt={title} />
            </PosterBox>
            <MovieCardContent>
              <ButtonList>
                <ButtonItem>
                  <Button onClick={() => controlLibrary('watched')}>
                    {watchedStatus ? 'delete watched' : 'add to watched'}
                  </Button>
                </ButtonItem>
                <ButtonItem>
                  <Button onClick={() => controlLibrary('queue')}>
                    {queueStatus ? 'delete queue' : 'add to queue'}
                  </Button>
                </ButtonItem>
                <ButtonItem>
                  <Button onClick={controlTrailer}>
                    {trailersInfo?.length === 0
                      ? '>> trailer <<'
                      : '>> info <<'}
                  </Button>
                </ButtonItem>
              </ButtonList>
              {trailersInfo?.length !== 0 && (
                <MovieCardTrailer
                  trailersInfo={trailersInfo}
                  trailerActiveIndex={trailerActiveIndex}
                  setTrailerActiveIndex={setTrailerActiveIndex}
                />
              )}
              {error && <ErrorMessage size={'small'}>{error}</ErrorMessage>}
              <MovieCardInfo
                vote_average={vote_average}
                vote_count={vote_count}
                popularity={popularity}
                trailersInfo={trailersInfo}
                release_date={release_date}
                original_title={original_title}
                genres={genres}
                overview={overview}
              />
            </MovieCardContent>
          </MovieCardWrapper>
        </MovieCardBox>
      )}
    </>
  );
};
