import { ButtonClose } from 'components';
import {
  BlackBox,
  Overlay,
  LaunchBox,
  LaunchBtn,
  Video,
  TypingTextFirstPart,
  TypingTextSecondPart,
  WhoWeAreText,
  InsideBox,
  TextBoxUp,
  TextBoxDown,
  YouText,
  AreText,
  InsideText,
  InsideOverlay,
  TabletsOverlay,
  TabletTextBox,
  TabletAnimationOne,
  TabletAnimationTwo,
  TabletAnimationThree,
  ButtonTruth,
  ButtonLie,
} from './Launch.styled';

import starlinkImg from '../data/images/where-is-your-starlink.png';
import startShutle from '../data/video/space-shuttle-launch-countdown.mp4';
import smallStep from '../data/audio/small-step.mp3';
import whoWeAreAudio from '../data/audio/who-we-are.mp3';
import whoWeAreVideo from '../data/video/who-we-are.webm';
import tabletsAudio from '../data/audio/mortal-combat.mp3';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const Launch = ({ closeModal }) => {
  const [playQueue, setPlayQueue] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [textOneReady, setTextOneReady] = useState(false);
  const [textTwoReady, setTextTwoReady] = useState(false);
  const [isLoaded, setIsLoaded] = useState(0);
  const timerId = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const fullwidth = useRef(null);

  let currentWindowHeight = window.innerHeight;

  useEffect(() => {
    if (isLoaded !== 2) {
      return;
    }
    videoRef.current.play();
    audioRef.current.play();
  }, [isLoaded]);

  useEffect(() => {
    // должно быть всегда 4
    if (playQueue === 4) {
      setTimeout(() => {
        setPlayQueue(s => s + 1);
      }, 12000);
    }
  }, [playQueue]);

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

  const launchRocket = () => {
    const orientation = window.screen.orientation.type;
    if (
      orientation === 'portrait-primary' ||
      orientation === 'portrait-secondary'
    ) {
      return toast.info('Please, flip the device to landscape mode');
    }

    setOverlay(true);

    setTimeout(() => {
      setOverlay(false);
      setPlayQueue(1);
    }, 3000);

    fullwidth.current
      .requestFullscreen({ navigationUI: 'hide' })
      .catch(err => console.log(err)); // проверка на ошибки если не может быть включен фуллскрин, что с ней делать?
    // fullwidth.current.exitFullscreen() - выход из Fullscreen, применить в конце
  };

  return (
    <BlackBox ref={fullwidth}>
      {playQueue >= 0 && <ButtonClose onClick={() => closeModal(false)} />}
      {playQueue === 0 && (
        <>
          {overlay && <Overlay timing={'3000ms'} />}
          <LaunchBox>
            <LaunchBtn type="button" onClick={launchRocket}>
              into space
            </LaunchBtn>
          </LaunchBox>
        </>
      )}
      {playQueue === 1 && (
        <>
          {overlay && <Overlay timing={'4000ms'} />}
          <Video poster={starlinkImg} autoPlay onPlay={addOverlay}>
            <source src={startShutle} type="video/mp4" />
            Your browser does not support the <code>video</code> element.
          </Video>
        </>
      )}
      {playQueue === 2 && (
        <>
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
        </>
      )}
      {playQueue === 3 && (
        <>
          {isLoaded && <WhoWeAreText>Who we are?</WhoWeAreText>}

          <Video ref={videoRef} onLoadedData={() => setIsLoaded(s => s + 1)}>
            <source src={whoWeAreVideo} type="video/webm" />
            Your browser does not support the <code>video</code> element.
          </Video>

          <audio
            ref={audioRef}
            onLoadedData={() => setIsLoaded(s => s + 1)}
            onEnded={() => setPlayQueue(4)}
          >
            <source src={whoWeAreAudio} type="audio/mp3" />
            Your browser does not support the <code>audio</code> element.
          </audio>
        </>
      )}
      {playQueue === 4 && (
        <InsideOverlay>
          <InsideBox currentHeight={currentWindowHeight}>
            <TextBoxUp>
              <YouText>You</YouText>
            </TextBoxUp>
            <InsideText>inside</InsideText>
            <TextBoxDown>
              <AreText>are</AreText>
            </TextBoxDown>
          </InsideBox>
        </InsideOverlay>
      )}
      {playQueue === 5 && (
        <TabletsOverlay>
          <audio
            onLoadedData={() => setTextTwoReady(true)}
            autoPlay
            controls
            loop
            style={{ height: '20px' }}
          >
            <source src={tabletsAudio} type="audio/mp3" />
            Your browser does not support the <code>audio</code> element.
          </audio>
          <ButtonTruth
            type="button"
            onClick={() => setPlayQueue(6)}
          ></ButtonTruth>
          <ButtonLie type="button" onClick={() => setPlayQueue(7)}></ButtonLie>
          {textTwoReady && (
            <TabletTextBox>
              <TabletAnimationOne>Choose</TabletAnimationOne>
              <TabletAnimationTwo>your</TabletAnimationTwo>
              <TabletAnimationThree>destiny!</TabletAnimationThree>
            </TabletTextBox>
          )}
        </TabletsOverlay>
      )}
      {playQueue === 6 && <WhoWeAreText>STAR WARS</WhoWeAreText>}
      {playQueue === 7 && <WhoWeAreText>MATRIX</WhoWeAreText>}
    </BlackBox>
  );
};
