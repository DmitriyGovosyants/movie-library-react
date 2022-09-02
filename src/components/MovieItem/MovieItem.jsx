import PropTypes from 'prop-types';
import { useState } from 'react';
import noPoster from '../../data/movies/no-poster.jpeg';
import brokenImg from '../../data/movies/broken-image.png';
import cinemaPoster from '../../data/movies/cinema-poster.png';
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
  itemRating = 0,
  itemPoster,
  itemTitle = 'No title',
  itemData = '',
  setShowModal,
  setCurrentId,
}) => {
  const [moviePoster, setMoviePoster] = useState(cinemaPoster);

  const handlePosterLoad = input => {
    if (!input) {
      return;
    }
    input.onerror = () => setMoviePoster(brokenImg);
    input.onload = () => {
      if (!itemPoster) {
        return setMoviePoster(noPoster);
      }
      return setMoviePoster(`https://image.tmdb.org/t/p/original${itemPoster}`);
    };
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
          ref={handlePosterLoad}
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

MovieItem.propTypes = {
  itemId: PropTypes.number.isRequired,
  itemRating: PropTypes.number,
  itemPoster: PropTypes.string,
  itemTitle: PropTypes.string,
  itemData: PropTypes.string,
  setShowModal: PropTypes.func.isRequired,
  setCurrentId: PropTypes.func.isRequired,
};
