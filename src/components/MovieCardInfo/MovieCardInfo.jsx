import PropTypes from 'prop-types';
import {
  InfoList,
  InfoItem,
  InfoLabel,
  InfoValue,
  AboutLabel,
  AboutText,
} from './MovieCardInfo.styled';

export const MovieCardInfo = ({ movieDetails }) => {
  const { release_date, original_title, genres, overview } = movieDetails;

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

MovieCardInfo.propTypes = {
  movieDetails: PropTypes.shape({
    release_date: PropTypes.string,
    original_title: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
    overview: PropTypes.string,
  }),
};
