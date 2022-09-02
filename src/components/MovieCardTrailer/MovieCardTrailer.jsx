import PropTypes from 'prop-types';
import { useState } from 'react';
import { PaginationArrow } from 'components';
import { TrailerBox, TotalCount } from './MovieCardTrailer.styled';

export const MovieCardTrailer = ({ movieTrailers }) => {
  console.log(movieTrailers);
  const [trailerActiveIndex, setTrailerActiveIndex] = useState(0);

  return (
    <TrailerBox>
      <iframe
        height={'300px'}
        width={'100%'}
        title="Youtube trailer"
        src={`https://www.youtube.com/embed/${movieTrailers[trailerActiveIndex].key}?autoplay=1&mute=0&controls=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {movieTrailers?.length > 1 && (
        <>
          <PaginationArrow
            page={trailerActiveIndex + 1}
            totalPage={movieTrailers?.length}
            setPage={setTrailerActiveIndex}
          />
          <TotalCount>
            {trailerActiveIndex + 1} / {movieTrailers?.length}
          </TotalCount>
        </>
      )}
    </TrailerBox>
  );
};

MovieCardTrailer.propTypes = {
  movieTrailers: PropTypes.array.isRequired,
};
