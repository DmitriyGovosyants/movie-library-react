import {
  InfoList,
  InfoItem,
  InfoLabel,
  InfoValue,
  AboutLabel,
  AboutText,
} from './MovieCardInfo.styled';

export const MovieCardInfo = ({
  movieTrailers,
  release_date,
  original_title,
  genres,
  overview,
}) => {
  const releaseDate = release_date ? release_date : 'none';
  const genresNames = genres ? genres.map(e => e.name).join(', ') : null;

  return (
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
      <AboutLabel>StoryLine</AboutLabel>
      <AboutText>{overview}</AboutText>
    </>
  );
};
