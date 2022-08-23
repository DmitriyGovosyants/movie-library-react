import { AiFillStar } from 'react-icons/ai';
import { RatingList, RatingItem, RatingValue } from './MovieCardRating.styled';

export const MovieCardRating = ({ vote_average, vote_count, popularity }) => {
  const voteAverage = vote_average ? vote_average.toFixed(1) : 0;
  const popularityTotal = popularity ? popularity.toFixed(0) : 0;

  return (
    <RatingList>
      <RatingItem>
        <RatingValue>
          <AiFillStar color={'red'} />
          {voteAverage}
        </RatingValue>
        <p>TMBD</p>
      </RatingItem>
      <RatingItem>
        <RatingValue>{vote_count}</RatingValue>
        <p>Votes</p>
      </RatingItem>
      <RatingItem>
        <RatingValue>{popularityTotal}</RatingValue>
        <p>Popular</p>
      </RatingItem>
    </RatingList>
  );
};
