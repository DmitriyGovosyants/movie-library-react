import { MovieItem } from 'components';
import { MovieListStyled } from './MovieList.styled';

export const MovieList = ({ movies, getMoviesByStatus, searchParams }) => {
  return (
    <MovieListStyled>
      {movies.map(({ id, poster_path, title, vote_average, release_date }) => {
        return (
          <MovieItem
            key={id}
            itemId={id}
            itemPoster={poster_path}
            itemTitle={title}
            itemRating={vote_average}
            itemData={release_date}
            getMoviesByStatus={getMoviesByStatus}
            searchParams={searchParams}
          />
        );
      })}
    </MovieListStyled>
  );
};
