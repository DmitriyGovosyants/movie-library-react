import { useState } from 'react';
import noPoster from 'data/images/gallery/no-poster.jpeg';
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

  const filmPoster = poster
    ? `https://image.tmdb.org/t/p/original${poster}`
    : noPoster;

  return (
    <FilmCard>
      <PosterThumb onClick={() => setShowModal(s => !s)}>
        <Poster loading="lazy" src={filmPoster} alt={title} />
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
