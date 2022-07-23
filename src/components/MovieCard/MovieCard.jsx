import { useState, useEffect } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { fetchMovieDetails } from 'services/filmsApi';
import { ErrorMessage, Modal, Loader } from 'components';
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
  RatingLabel,
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
    ? `https://image.tmdb.org/t/p/original` + poster_path
    : 'https://eiflixnob.live/assets/general/images/no_poster.jpg';

  const genresName = genres ? genres.map(e => e.name).join(', ') : null;
  const voteAverage = vote_average ? vote_average.toFixed(1) : 0;
  const popularityTotal = popularity ? popularity.toFixed(0) : 0;

  console.log('рендер модалки');

  return (
    <>
      {showLoader && <Loader />}
      {release_date && (
        <MovieCardBox>
          <Title>{title}</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <ModalCloseBtn type="button" onClick={() => setShowModal(s => !s)}>
            <FaRegWindowClose size={40} />
          </ModalCloseBtn>
          <MovieCardWrapper>
            <PosterBox>
              <Poster src={filmPoster} alt={title} />
            </PosterBox>
            <MovieCardContent>
              <RatingList>
                <RatingItem>
                  <RatingValue>
                    <AiFillStar color={'red'} />
                    {voteAverage}
                  </RatingValue>
                  <RatingLabel>TMBD</RatingLabel>
                </RatingItem>
                <RatingItem>
                  <RatingValue>{vote_count}</RatingValue>
                  <RatingLabel>Votes</RatingLabel>
                </RatingItem>
                <RatingItem>
                  <RatingValue>{popularityTotal}</RatingValue>
                  <RatingLabel>Popular</RatingLabel>
                </RatingItem>
              </RatingList>
              <InfoList>
                <InfoItem>
                  <InfoLabel>Release date:</InfoLabel>
                  <InfoValue>{release_date}</InfoValue>
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
              <AboutBox>
                <AboutLabel>StoryLine</AboutLabel>
                <AboutText>{overview}</AboutText>
              </AboutBox>
              <ButtonList>
                <ButtonItem>
                  <LibraryBtn type="button">add to watched</LibraryBtn>
                </ButtonItem>
                <ButtonItem>
                  <LibraryBtn type="button">add to queue</LibraryBtn>
                </ButtonItem>
              </ButtonList>
            </MovieCardContent>
          </MovieCardWrapper>
        </MovieCardBox>
      )}
    </>
  );
};
