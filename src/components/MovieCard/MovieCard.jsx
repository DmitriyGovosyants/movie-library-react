import { useState, useEffect } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { fetchMovieDetails, fetchMovieTrailer } from 'services/filmsApi';
import noPoster from 'data/images/gallery/no-poster.jpeg';
import { ErrorMessage, Spinner, MovieCardTrailer } from 'components';
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
  InfoValue,
  RatingList,
  RatingItem,
  RatingValue,
  AboutBox,
  AboutLabel,
  AboutText,
  ButtonList,
  ButtonItem,
  LibraryBtn,
} from './MovieCard.styled';

export const MovieCard = ({ id, setShowModal }) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [trailersInfo, setTrailersInfo] = useState([]);
  const [trailerActiveIndex, setTrailerActiveIndex] = useState(0);
  const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);

    const fetch = async () => {
      try {
        const { data } = await fetchMovieDetails(id);
        setMovieDetails(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setShowLoader(false);
      }
    };
    fetch();
  }, [id]);

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
        } = await fetchMovieTrailer(id);
        if (results?.length === 0) {
          setError('> No trailers found <');
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
              {trailersInfo?.length !== 0 && (
                <MovieCardTrailer
                  trailersInfo={trailersInfo}
                  trailerActiveIndex={trailerActiveIndex}
                  setTrailerActiveIndex={setTrailerActiveIndex}
                />
              )}
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
                      <p>Release date:</p>
                      <InfoValue>{releaseDate}</InfoValue>
                    </InfoItem>
                    <InfoItem>
                      <p>Original title:</p>
                      <InfoValue>{original_title}</InfoValue>
                    </InfoItem>
                    <InfoItem>
                      <p>Genre:</p>
                      <InfoValue>{genresName}</InfoValue>
                    </InfoItem>
                  </InfoList>
                  <AboutBox>
                    <AboutLabel>StoryLine</AboutLabel>
                    <AboutText>{overview}</AboutText>
                  </AboutBox>
                </>
              )}
              {error && <ErrorMessage size={'small'}>{error}</ErrorMessage>}
              <ButtonList>
                <ButtonItem>
                  <LibraryBtn type="button">add to watched</LibraryBtn>
                </ButtonItem>
                <ButtonItem>
                  <LibraryBtn type="button">add to queue</LibraryBtn>
                </ButtonItem>
                <ButtonItem>
                  <LibraryBtn type="button" onClick={controlTrailer}>
                    {trailersInfo?.length === 0
                      ? 'watch trailer'
                      : 'close trailer'}
                  </LibraryBtn>
                </ButtonItem>
              </ButtonList>
            </MovieCardContent>
          </MovieCardWrapper>
        </MovieCardBox>
      )}
    </>
  );
};
