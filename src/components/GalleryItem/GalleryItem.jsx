import { FilmCard, Poster, FilmTitle } from './GalleryItem.styled';

export const GalleryItem = ({ poster, title }) => {
  return (
    <FilmCard>
      <Poster
        loading="lazy"
        src={`https://image.tmdb.org/t/p/original` + poster}
        alt={title}
      />
      <FilmTitle>{title}</FilmTitle>
    </FilmCard>
  );
};
