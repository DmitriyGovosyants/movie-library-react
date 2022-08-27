import { Button, ButtonClose } from 'components';
import {
  LaunchBox,
  StartText,
  VideoBox,
  LaunchVideo,
  Overlay,
  BlackBox,
  TypingTextFirstPart,
  TypingTextSecondPart,
} from './Launch.styled';

import starlinkImg from '../data/images/where-our-starlink.jpg';
import startShutle from '../data/video/space-shuttle-launch-countdown.mp4';
import smallStep from '../data/audio/small-step.mp3';
import { useState } from 'react';
import { useRef } from 'react';

export const Launch = ({ closeModal }) => {
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
      console.log('tick');

      if (tick === 15) {
        setOverlay(true);
      }
      if (tick === 19) {
        clearInterval(timerId.current);
        setOverlay(false);
        setPlayQueue(2);
      }
    }, 1000);
  };

  const stepThreeAddOverlay = () => {
    let tick = 0;
    timerId.current = setInterval(() => {
      tick += 1;
      console.log('tick2');

      if (tick === 15) {
        setOverlay(true);
      }
      if (tick === 19) {
        clearInterval(timerId.current);
        setOverlay(false);
        setPlayQueue(3);
      }
    }, 1000);
  };

  return (
    <>
      {playQueue > 0 && <ButtonClose onClick={() => closeModal(false)} />}
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
          {overlay && <Overlay timing={'4000ms'} />}
          <LaunchVideo poster={starlinkImg} autoPlay onPlay={stepTwoAddOverlay}>
            <source src={startShutle} type="video/mp4" />
            Your browser does not support the <code>video</code> element.
          </LaunchVideo>
        </VideoBox>
      )}
      {playQueue === 2 && (
        <BlackBox>
          {overlay && <Overlay timing={'4000ms'} />}
          <TypingTextFirstPart>
            “That’s one small step for man,
          </TypingTextFirstPart>
          <TypingTextSecondPart>
            one giant leap for mankind.”
          </TypingTextSecondPart>
          <audio autoPlay onPlay={stepThreeAddOverlay}>
            <source src={smallStep} type="audio/mp3" />
            Your browser does not support the <code>audio</code> element.
          </audio>
        </BlackBox>
      )}
      {playQueue === 3 && <p>YEAHOOOOO</p>}
    </>
  );
};
