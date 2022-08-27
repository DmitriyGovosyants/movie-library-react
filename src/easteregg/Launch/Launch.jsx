import { Button } from 'components';
import {
  LaunchBox,
  StartText,
  VideoBox,
  LaunchVideo,
  Overlay,
} from './Launch.styled';
import startShutle from '../data/video/space-shuttle-launch-countdown.mp4';
import starlinkImg from '../data/images/where-our-starlink.jpg';
import { useState } from 'react';
import { useRef } from 'react';

export const Launch = () => {
  const [playQueue, setPlayQueue] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const timerId = useRef(null);

  const stepOneLaunch = () => {
    setPlayQueue(1);
  };

  const stepTwoAddOverlay = () => {
    let tick = 0;
    timerId.current = setInterval(() => {
      tick += 1;

      if (tick === 15) {
        setOverlay(true);
      }
      if (tick === 19) {
        clearInterval(timerId.current);
        setPlayQueue(2);
      }
    }, 1000);
  };

  return (
    <>
      {playQueue === 0 && (
        <LaunchBox>
          <StartText>
            <Button onClick={stepOneLaunch}>
              {`>>`} launch {`<<`}
            </Button>
          </StartText>
        </LaunchBox>
      )}
      {playQueue === 1 && (
        <VideoBox>
          {overlay && <Overlay />}
          <LaunchVideo
            poster={starlinkImg}
            // controls
            autoPlay
            onPlay={stepTwoAddOverlay}
          >
            <source src={startShutle} type="video/mp4" />
            Your browser does not support the <code>video</code> element.
          </LaunchVideo>
        </VideoBox>
      )}
      {playQueue === 2 && 'asdfasdfsdf'}
    </>
  );
};
