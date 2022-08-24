import { MovieItem } from 'components';
import { MovieListBox } from './MovieList.styled';

export const MovieList = ({ movies, setRefreshPage }) => {
  return (
    <MovieListBox>
      {movies.map(({ id, poster_path, title, vote_average, release_date }) => {
        return (
          <MovieItem
            key={id}
            itemId={id}
            itemPoster={poster_path}
            itemTitle={title}
            itemRating={vote_average}
            itemData={release_date}
            setRefreshPage={setRefreshPage}
          />
        );
      })}
    </MovieListBox>
  );
};
