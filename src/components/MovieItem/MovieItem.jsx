import { useState, useEffect } from 'react';
import noPoster from 'data/movies/no-poster.jpeg';
import brokenImg from 'data/movies/broken-image.png';
import cinemaPoster from 'data/movies/cinema-poster.png';
import {
  MovieItemBox,
  PosterBox,
  Poster,
  MovieRating,
  MovieYear,
  MovieTitle,
} from './MovieItem.styled';

export const MovieItem = ({
  itemId,
  itemPoster,
  itemTitle = 'No title',
  itemRating = 0,
  itemData = '',
  setShowModal,
  setCurrentId,
}) => {
  const [moviePoster, setMoviePoster] = useState(cinemaPoster);

  useEffect(() => {
    if (!itemPoster) {
      return setMoviePoster(noPoster);
    }
    return setMoviePoster(`https://image.tmdb.org/t/p/original${itemPoster}`);
  }, [itemPoster]);

  const handlePosterLoadError = input => {
    if (!input) {
      return;
    }
    input.onerror = () => setMoviePoster(brokenImg);
  };

  const ratingFixed = itemRating?.toFixed(1);
  const dataYear = itemData?.slice(0, 4);

  return (
    <MovieItemBox>
      <PosterBox
        onClick={() => {
          setShowModal(true);
          setCurrentId(itemId);
        }}
      >
        <Poster
          ref={handlePosterLoadError}
          loading="lazy"
          src={moviePoster}
          alt={itemTitle}
        />
        <MovieRating>{ratingFixed}</MovieRating>
        <MovieYear>{dataYear}</MovieYear>
      </PosterBox>
      <MovieTitle>{itemTitle}</MovieTitle>
    </MovieItemBox>
  );
};
