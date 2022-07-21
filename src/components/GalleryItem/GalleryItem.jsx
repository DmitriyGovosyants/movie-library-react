import { useState } from 'react';
import { Modal, MovieCard } from 'components';
import {
  FilmCard,
  PosterThumb,
  Poster,
  RatingData,
  FilmYear,
  FilmTitle,
} from './GalleryItem.styled';

export const GalleryItem = ({ id, poster, title, rating, data }) => {
  const [showModal, setShowModal] = useState(false);

  const filmPoster = poster
    ? `https://image.tmdb.org/t/p/original` + poster
    : 'https://eiflixnob.live/assets/general/images/no_poster.jpg';

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
          <MovieCard id={id} />
        </Modal>
      )}
    </FilmCard>
  );
};
