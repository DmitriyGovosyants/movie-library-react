import { useState, useEffect } from 'react';
import { ref, set, get, child, update, remove } from 'firebase/database';
import { db } from 'services/firebase/frebaseConfig';
import { FaRegWindowClose } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { fetchMovieDetails, fetchMovieTrailer } from 'services/filmsApi';
import noPoster from 'data/images/gallery/no-poster.jpeg';
import {
  ErrorMessage,
  Spinner,
  MovieCardTrailer,
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
  InfoList,
  InfoItem,
  InfoLabel,
  InfoValue,
  RatingList,
  RatingItem,
  RatingValue,
  AboutLabel,
  AboutText,
  ButtonList,
  ButtonItem,
} from './MovieCard.styled';
import { toast } from 'react-toastify';

export const MovieCard = ({
  itemId,
  itemTitle,
  itemRating,
  itemData,
  itemPoster,
  setShowModal,
}) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [trailersInfo, setTrailersInfo] = useState([]);
  const [trailerActiveIndex, setTrailerActiveIndex] = useState(0);
  const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const { user } = useUser();
  const [movieStatus, setMovieStatus] = useState([]);

  useEffect(() => {
    setShowLoader(true);

    const fetch = async () => {
      try {
        const { data } = await fetchMovieDetails(itemId);
        setMovieDetails(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setShowLoader(false);
      }
    };
    fetch();
  }, [itemId]);

  useEffect(() => {
    const getFilmStatus = async () => {
      try {
        const snapshot = await get(child(ref(db), `/users/${user?.uid}`));
        if (snapshot.exists()) {
          const status = snapshot.val().films[itemId].status;
          if (status) {
            setMovieStatus(status);
          }
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

  const releaseDate = release_date ? release_date : 'none';
  const genresName = genres ? genres.map(e => e.name).join(', ') : null;
  const voteAverage = vote_average ? vote_average.toFixed(1) : 0;
  const popularityTotal = popularity ? popularity.toFixed(0) : 0;

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
        setError(e.message);
      } finally {
        setShowLoader(false);
      }
    }

    if (trailersInfo?.length) {
      setTrailersInfo([]);
    }
  };

  const controlLibrary = async status => {
    console.log(movieStatus?.length === 0);
    if (!user) {
      return toast.info('Please, log in');
    }
    if (movieStatus?.length === 0) {
      console.log('добавление нового фильма');
      try {
        await set(ref(db, `/users/${user?.uid}/films/${itemId}`), {
          status: [status],
          id: itemId,
          poster_path: itemPoster,
          title: itemTitle,
          vote_average: itemRating,
          release_date: itemData,
        });
        setMovieStatus([status]);
        toast.success(`"${title}" has been added to ${status}`);
      } catch (error) {
        toast.error(`We can not add "${title}" to ${status}`);
      }
      return;
    }
    if (movieStatus?.includes?.(status) && movieStatus?.length === 1) {
      console.log('очищение библиотеки если элемент один');
      try {
        await remove(ref(db, `/users/${user?.uid}/films/${itemId}`));
        setMovieStatus(s => s.filter(e => e !== status));
        toast.success(`"${title}" has been updated to ${status}`);
      } catch (error) {
        toast.error(`We can not add "${title}" to ${status}`);
      }
      return;
    }
    if (movieStatus?.includes?.(status)) {
      console.log('очищение элемента библиотеки если элемента два');
      const reversStatus = status === 'watched' ? 'queue' : 'watched';
      try {
        await update(ref(db, `/users/${user?.uid}/films/${itemId}`), {
          status: [reversStatus],
        });
        setMovieStatus(s => s.filter(e => e !== status));
        toast.success(`"${title}" has been updated to ${status}`);
      } catch (error) {
        toast.error(`We can not add "${title}" to ${status}`);
      }
      return;
    }

    console.log('добавление второго статуса в массив');
    try {
      await update(ref(db, `/users/${user?.uid}/films/${itemId}`), {
        status: [...movieStatus, status],
      });
      setMovieStatus(s => [...s, status]);
      toast.success(`"${title}" has been updated to ${status}`);
    } catch (error) {
      toast.error(`We can not add "${title}" to ${status}`);
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
                    {movieStatus?.includes?.('watched')
                      ? 'delete watched'
                      : 'add to watched'}
                  </Button>
                </ButtonItem>
                <ButtonItem>
                  <Button onClick={() => controlLibrary('queue')}>
                    {movieStatus?.includes?.('queue')
                      ? 'delete queue'
                      : 'add to queue'}
                  </Button>
                </ButtonItem>
                <ButtonItem>
                  <Button onClick={controlTrailer}>
                    {trailersInfo?.length === 0
                      ? '>> trailer <<'
                      : '>> film info <<'}
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
              <RatingList>
                <RatingItem>
                  <RatingValue>
                    <AiFillStar color={'red'} />
                    {voteAverage}
                  </RatingValue>
                  <p>TMBD</p>
                </RatingItem>
                <RatingItem>
                  <RatingValue>{vote_count}</RatingValue>
                  <p>Votes</p>
                </RatingItem>
                <RatingItem>
                  <RatingValue>{popularityTotal}</RatingValue>
                  <p>Popular</p>
                </RatingItem>
              </RatingList>
              {trailersInfo?.length === 0 && (
                <>
                  <InfoList>
                    <InfoItem>
                      <InfoLabel>Release date:</InfoLabel>
                      <InfoValue>{releaseDate}</InfoValue>
                    </InfoItem>
                    <InfoItem>
                      <InfoLabel>Original title:</InfoLabel>
                      <InfoValue>{original_title}</InfoValue>
                    </InfoItem>
                    <InfoItem>
                      <InfoLabel>Genre:</InfoLabel>
                      <InfoValue>{genresName}</InfoValue>
                    </InfoItem>
                  </InfoList>
                  <div>
                    <AboutLabel>StoryLine</AboutLabel>
                    <AboutText>{overview}</AboutText>
                  </div>
                </>
              )}
            </MovieCardContent>
          </MovieCardWrapper>
        </MovieCardBox>
      )}
    </>
  );
};
