import { useState, useEffect } from 'react';
import noPoster from 'data/images/gallery/no-poster.jpeg';
import brokenImg from 'data/images/gallery/broken-image.png';
import { Modal, MovieCard } from 'components';
import {
  FilmCard,
  PosterThumb,
  Poster,
  RatingData,
  FilmYear,
  FilmTitle,
} from './GalleryItem.styled';

export const GalleryItem = ({
  itemId,
  itemPoster,
  itemTitle = 'No title',
  itemRating = 0,
  itemData = '',
  getFilmsByStatus,
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
    <FilmCard>
      <PosterThumb onClick={() => setShowModal(s => !s)}>
        <Poster
          ref={handlePosterLoadError}
          loading="lazy"
          src={posterReadyToLoad}
          alt={itemTitle}
        />
        <RatingData>{ratingFixed}</RatingData>
        <FilmYear>{dataYear}</FilmYear>
      </PosterThumb>
      <FilmTitle>{itemTitle}</FilmTitle>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <MovieCard
            itemId={itemId}
            itemTitle={itemTitle}
            itemRating={itemRating}
            itemData={itemData}
            itemPoster={itemPoster}
            setShowModal={setShowModal}
            getFilmsByStatus={getFilmsByStatus}
            searchParams={searchParams}
          />
        </Modal>
      )}
    </FilmCard>
  );
};
