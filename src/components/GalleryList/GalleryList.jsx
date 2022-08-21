import { GalleryItem } from 'components';
import { GalleryListStyled } from './GalleryList.styled';

export const GalleryList = ({ films }) => {
  return (
    <GalleryListStyled>
      {films.map(({ id, poster_path, title, vote_average, release_date }) => {
        return (
          <GalleryItem
            key={id}
            id={id}
            poster={poster_path}
            title={title}
            rating={vote_average}
            data={release_date}
          />
        );
      })}
    </GalleryListStyled>
  );
};
