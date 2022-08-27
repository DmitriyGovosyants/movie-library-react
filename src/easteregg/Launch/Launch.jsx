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
  WhoWeAreText,
} from './Launch.styled';

import starlinkImg from '../data/images/where-is-your-starlink.png';
import startShutle from '../data/video/space-shuttle-launch-countdown.mp4';
import smallStep from '../data/audio/small-step.mp3';
import whoWeAreAudio from '../data/audio/who-we-are.mp3';
import whoWeAreVideo from '../data/video/who-we-are.webm';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export const Launch = ({ closeModal }) => {
  const [playQueue, setPlayQueue] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [textOneReady, setTextOneReady] = useState(false);
  const [textTwoReady, setTextTwoReady] = useState(false);
  const [isPlayWhoWeAre, setIsPlayWhoWeAre] = useState(0);
  const timerId = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlayWhoWeAre !== 2) {
      return;
    }
    videoRef.current.play();
    audioRef.current.play();
  }, [isPlayWhoWeAre]);

  const stepOneLaunch = () => {
    setPlayQueue(1);
  };

  const addOverlay = () => {
    let tick = 0;
    timerId.current = setInterval(() => {
      tick += 1;

      if (tick === 15) {
        setOverlay(true);
      }
      if (tick === 19) {
        clearInterval(timerId.current);
        setOverlay(false);
        setPlayQueue(s => s + 1);
      }
    }, 1000);
  };

  // const stepTwoAddOverlay = () => {
  //   let tick = 0;
  //   timerId.current = setInterval(() => {
  //     tick += 1;

  //     if (tick === 15) {
  //       setOverlay(true);
  //     }
  //     if (tick === 19) {
  //       clearInterval(timerId.current);
  //       setOverlay(false);
  //       setPlayQueue(3);
  //     }
  //   }, 1000);
  // };

  const playInside = () => {
    setPlayQueue(4);
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
          <LaunchVideo poster={starlinkImg} autoPlay onPlay={addOverlay}>
            <source src={startShutle} type="video/mp4" />
            Your browser does not support the <code>video</code> element.
          </LaunchVideo>
        </VideoBox>
      )}
      {playQueue === 2 && (
        <BlackBox>
          {overlay && <Overlay timing={'4000ms'} />}
          {textOneReady && (
            <>
              <TypingTextFirstPart>
                “That’s one small step for man,
              </TypingTextFirstPart>
              <TypingTextSecondPart>
                one giant leap for mankind.”
              </TypingTextSecondPart>
            </>
          )}
          <audio
            autoPlay
            onPlay={() => {
              setTextOneReady(true);
              addOverlay();
            }}
          >
            <source src={smallStep} type="audio/mp3" />
            Your browser does not support the <code>audio</code> element.
          </audio>
        </BlackBox>
      )}
      {playQueue === 3 && (
        <BlackBox>
          {textTwoReady && <WhoWeAreText>Who we are?</WhoWeAreText>}

          <LaunchVideo
            ref={videoRef}
            onLoadedData={() => setIsPlayWhoWeAre(s => s + 1)}
            onPlay={() => setTextTwoReady(true)}
          >
            <source src={whoWeAreVideo} type="video/webm" />
            Your browser does not support the <code>video</code> element.
          </LaunchVideo>

          <audio
            ref={audioRef}
            onLoadedData={() => setIsPlayWhoWeAre(s => s + 1)}
            onEnded={playInside}
          >
            <source src={whoWeAreAudio} type="audio/mp3" />
            Your browser does not support the <code>audio</code> element.
          </audio>
        </BlackBox>
      )}
      {/* Сделать уменьшение текста на п.4 в экраны телевизоров */}
      {playQueue === 4 && (
        <BlackBox>
          <WhoWeAreText>You are inside!</WhoWeAreText>
        </BlackBox>
      )}
    </>
  );
};
