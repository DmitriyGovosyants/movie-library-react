import {
  FilmCard,
  PosterThumb,
  Poster,
  RatingData,
  FilmYear,
  FilmTitle,
} from './GalleryItem.styled';

export const GalleryItem = ({ poster, title, rating, data }) => {
  const filmPoster = poster
    ? `https://image.tmdb.org/t/p/original` + poster
    : 'https://eiflixnob.live/assets/general/images/no_poster.jpg';

  return (
    <FilmCard>
      <PosterThumb>
        <Poster loading="lazy" src={filmPoster} alt={title} />
        <RatingData>{rating.toFixed(1)}</RatingData>
        <FilmYear>{data.slice(0, 4)}</FilmYear>
      </PosterThumb>
      <FilmTitle>{title}</FilmTitle>
    </FilmCard>
  );
};
