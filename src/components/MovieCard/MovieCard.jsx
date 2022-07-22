import { useState, useEffect } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
import { fetchMovieDetails } from 'services/filmsApi';
import { ErrorMessage } from 'components';
import {
  MovieCardBox,
  Title,
  ModalCloseBtn,
  MovieCardWrapper,
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

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await fetchMovieDetails(id);
        setMovieDetails(data);
      } catch (e) {
        setError(e.message);
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

  return (
    <MovieCardBox>
      <Title>{title}</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {movieDetails && (
        <>
          <ModalCloseBtn type="button" onClick={() => setShowModal(s => !s)}>
            <FaRegWindowClose size={40} />
          </ModalCloseBtn>
          <MovieCardWrapper>
            <Poster src={filmPoster} alt="" />
            <MovieCardContent>
              <InfoList>
                <InfoItem>
                  <InfoLabel>Release date</InfoLabel>
                  <InfoValue>{release_date}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Original title</InfoLabel>
                  <InfoValue>{original_title}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Genre</InfoLabel>
                  <InfoValue>{genresName}</InfoValue>
                </InfoItem>
              </InfoList>
              <RatingList>
                <RatingItem>
                  <RatingLabel>TMBD</RatingLabel>
                  <RatingValue color={'red'}>{voteAverage}</RatingValue>
                </RatingItem>
                <RatingItem>
                  <RatingLabel>Votes</RatingLabel>
                  <RatingValue>{vote_count}</RatingValue>
                </RatingItem>
                <RatingItem>
                  <RatingLabel>Popularity</RatingLabel>
                  <RatingValue>{popularityTotal}</RatingValue>
                </RatingItem>
              </RatingList>
              <AboutBox>
                <AboutLabel>About</AboutLabel>
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
        </>
      )}
    </MovieCardBox>
  );
};
