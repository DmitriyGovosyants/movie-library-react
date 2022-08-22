import { useState } from 'react';
import { PaginationArrow } from 'components';
import { TrailerContainer, TotalTrailer } from './MovieCardTrailer.styled';

export const MovieCardTrailer = ({ trailersInfo }) => {
  const [trailerActiveIndex, setTrailerActiveIndex] = useState(0);

  return (
    <TrailerContainer>
      <iframe
        height={'300px'}
        width={'100%'}
        title="Youtube trailer"
        src={`https://www.youtube.com/embed/${trailersInfo[trailerActiveIndex].key}?autoplay=1&mute=0&controls=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {trailersInfo?.length > 1 && (
        <>
          <PaginationArrow
            setPage={setTrailerActiveIndex}
            page={trailerActiveIndex + 1}
            totalPage={trailersInfo?.length}
          />
          <TotalTrailer>
            {trailerActiveIndex + 1} / {trailersInfo?.length}
          </TotalTrailer>
        </>
      )}
    </TrailerContainer>
  );
};
