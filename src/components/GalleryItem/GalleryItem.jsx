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
  id,
  poster,
  title = 'No title',
  rating = 0,
  data = '',
}) => {
  const [showModal, setShowModal] = useState(false);
  const [posterImg, setPosterImg] = useState(null);

  useEffect(() => {
    if (!poster) {
      return setPosterImg(noPoster);
    }
    return setPosterImg(`https://image.tmdb.org/t/p/original${poster}`);
  }, [poster]);

  const handleErrorPosterLoad = input => {
    if (!input) {
      return;
    }
    input.onerror = () => setPosterImg(brokenImg);
  };

  return (
    <FilmCard>
      <PosterThumb onClick={() => setShowModal(s => !s)}>
        <Poster
          ref={handleErrorPosterLoad}
          loading="lazy"
          src={posterImg}
          alt={title}
        />
        <RatingData>{rating.toFixed(1)}</RatingData>
        <FilmYear>{data.slice(0, 4)}</FilmYear>
      </PosterThumb>
      <FilmTitle>{title}</FilmTitle>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <MovieCard id={id} setShowModal={setShowModal} />
        </Modal>
      )}
    </FilmCard>
  );
};
