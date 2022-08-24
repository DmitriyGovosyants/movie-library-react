import { useState, useEffect } from 'react';
import noPoster from 'data/images/movies/no-poster.jpeg';
import brokenImg from 'data/images/movies/broken-image.png';
import { Modal, MovieCard } from 'components';
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
  setRefreshPage,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [posterReadyToLoad, setPosterReadyToLoad] = useState(null);

  useEffect(() => {
    if (!itemPoster) {
      return setPosterReadyToLoad(noPoster);
    }
    return setPosterReadyToLoad(
      `https://image.tmdb.org/t/p/original${itemPoster}`
    );
  }, [itemPoster]);

  const handlePosterLoadError = input => {
    if (!input) {
      return;
    }
    input.onerror = () => setPosterReadyToLoad(brokenImg);
  };

  const ratingFixed = itemRating?.toFixed(1);
  const dataYear = itemData?.slice(0, 4);

  return (
    <MovieItemBox>
      <PosterBox onClick={() => setShowModal(s => !s)}>
        <Poster
          ref={handlePosterLoadError}
          loading="lazy"
          src={posterReadyToLoad}
          alt={itemTitle}
        />
        <MovieRating>{ratingFixed}</MovieRating>
        <MovieYear>{dataYear}</MovieYear>
      </PosterBox>
      <MovieTitle>{itemTitle}</MovieTitle>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <MovieCard
            itemId={itemId}
            setShowModal={setShowModal}
            setRefreshPage={setRefreshPage}
          />
        </Modal>
      )}
    </MovieItemBox>
  );
};
