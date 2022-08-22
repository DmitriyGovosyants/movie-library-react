import { AiFillStar } from 'react-icons/ai';
import {
  InfoList,
  InfoItem,
  InfoLabel,
  InfoValue,
  RatingList,
  RatingItem,
  RatingValue,
  AboutLabel,
  AboutText,
} from './MovieCardInfo.styled';

export const MovieCardInfo = ({
  vote_average,
  vote_count,
  popularity,
  trailersInfo,
  release_date,
  original_title,
  genres,
  overview,
}) => {
  const releaseDate = release_date ? release_date : 'none';
  const genresNames = genres ? genres.map(e => e.name).join(', ') : null;
  const voteAverage = vote_average ? vote_average.toFixed(1) : 0;
  const popularityTotal = popularity ? popularity.toFixed(0) : 0;

  return (
    <>
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
      {trailersInfo?.length === 0 && (
        <>
          <InfoList>
            <InfoItem>
              <InfoLabel>Release date:</InfoLabel>
              <InfoValue>{releaseDate}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Original title:</InfoLabel>
              <InfoValue>{original_title}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Genre:</InfoLabel>
              <InfoValue>{genresNames}</InfoValue>
            </InfoItem>
          </InfoList>
          <div>
            <AboutLabel>StoryLine</AboutLabel>
            <AboutText>{overview}</AboutText>
          </div>
        </>
      )}
    </>
  );
};
