import { useState, useEffect } from 'react';
import noPoster from 'data/images/movies/no-poster.jpeg';
import brokenImg from 'data/images/movies/broken-image.png';
import { Modal, MovieCard } from 'components';
import {
  MovieItemStyled,
  PosterThumb,
  Poster,
  RatingData,
  MovieYear,
  MovieTitle,
} from './MovieItem.styled';

export const MovieItem = ({
  itemId,
  itemPoster,
  itemTitle = 'No title',
  itemRating = 0,
  itemData = '',
  getMoviesByStatus,
  searchParams,
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
    <MovieItemStyled>
      <PosterThumb onClick={() => setShowModal(s => !s)}>
        <Poster
          ref={handlePosterLoadError}
          loading="lazy"
          src={posterReadyToLoad}
          alt={itemTitle}
        />
        <RatingData>{ratingFixed}</RatingData>
        <MovieYear>{dataYear}</MovieYear>
      </PosterThumb>
      <MovieTitle>{itemTitle}</MovieTitle>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <MovieCard
            itemId={itemId}
            itemTitle={itemTitle}
            itemRating={itemRating}
            itemData={itemData}
            itemPoster={itemPoster}
            setShowModal={setShowModal}
            getMoviesByStatus={getMoviesByStatus}
            searchParams={searchParams}
          />
        </Modal>
      )}
    </MovieItemStyled>
  );
};
