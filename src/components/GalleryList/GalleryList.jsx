import { GalleryItem } from 'components';
import { GalleryListStyled } from './GalleryList.styled';

export const GalleryList = ({ films }) => {
  return (
    <GalleryListStyled>
      {films.map(({ id, poster_path, title, vote_average, release_date }) => {
        return (
          <GalleryItem
            key={id}
            itemId={id}
            itemPoster={poster_path}
            itemTitle={title}
            itemRating={vote_average}
            itemData={release_date}
          />
        );
      })}
    </GalleryListStyled>
  );
};
