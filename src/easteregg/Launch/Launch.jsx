import { ButtonClose, Button } from 'components';
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

import starlink from '../data/images/where-is-your-starlink.png';
import shuttle from '../data/video/space-shuttle-launch-countdown.mp4';
import smallStep from '../data/audio/small-step.mp3';
import whoWeAreAudio from '../data/audio/who-we-are.mp3';
import whoWeAreVideo from '../data/video/who-we-are.webm';
import tabletsAudio from '../data/audio/mortal-combat.mp3';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { goMatrix } from 'easteregg/Matrix';

export const Launch = ({ closeModal }) => {
  const [playQueue, setPlayQueue] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const overlayTimerIdRef = useRef(null);
  const whoWeAreVideoRef = useRef(null);
  const whoWeAreAudioRef = useRef(null);
  const fullwidthRef = useRef(null);

  // console.log(playQueue, overlay, isAudioLoaded, isVideoLoaded);
  let currentWindowHeight = window.innerHeight;

  useEffect(() => {
    if (isAudioLoaded && isVideoLoaded) {
      whoWeAreVideoRef.current?.play();
      whoWeAreAudioRef.current?.play();
    }
  }, [isAudioLoaded, isVideoLoaded]);

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
    overlayTimerIdRef.current = setInterval(() => {
      tick += 1;

      if (tick === 15) {
        setOverlay(true);
      }
      if (tick === 19) {
        clearInterval(overlayTimerIdRef.current);
        setOverlay(false);
        setIsAudioLoaded(false);
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
    }, 4000);

    fullwidthRef.current
      .requestFullscreen({ navigationUI: 'hide' })
      .catch(err => console.log(err)); // проверка на ошибки если не может быть включен фуллскрин, что с ней делать?
    // fullwidthRef.current.exitFullscreen() - выход из Fullscreen, применить в конце
  };

  return (
    <BlackBox ref={fullwidthRef}>
      <ButtonClose onClick={() => closeModal(false)} />
      {overlay && <Overlay timing={'4000ms'} />}
      {/* start */}
      {playQueue === 0 && (
        <LaunchBox>
          <LaunchBtn type="button" onClick={launchRocket}>
            into space
          </LaunchBtn>
        </LaunchBox>
      )}
      {/* launch */}
      {playQueue === -1 && (
        <Video poster={starlink} autoPlay onPlay={addOverlay}>
          <source src={shuttle} type="video/mp4" />
          Your browser does not support the <code>video</code> element.
        </Video>
      )}
      {/* small step */}
      {playQueue === 2 && (
        <>
          {isAudioLoaded && (
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
              setIsAudioLoaded(true);
              addOverlay();
            }}
          >
            <source src={smallStep} type="audio/mp3" />
            Your browser does not support the <code>audio</code> element.
          </audio>
        </>
      )}
      {/* who we are */}
      {playQueue === 3 && (
        <>
          {isAudioLoaded && isVideoLoaded && (
            <WhoWeAreText>Who we are?</WhoWeAreText>
          )}

          <Video
            ref={whoWeAreVideoRef}
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src={whoWeAreVideo} type="video/webm" />
            Your browser does not support the <code>video</code> element.
          </Video>

          <audio
            ref={whoWeAreAudioRef}
            onLoadedData={() => setIsAudioLoaded(true)}
            onEnded={() => {
              setIsAudioLoaded(false);
              setIsVideoLoaded(false);
              setPlayQueue(4);
            }}
          >
            <source src={whoWeAreAudio} type="audio/mp3" />
            Your browser does not support the <code>audio</code> element.
          </audio>
        </>
      )}
      {/* inside */}
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
      {/* tablets */}
      {playQueue === 1 && (
        <TabletsOverlay>
          <audio
            onLoadedData={() => setIsAudioLoaded(true)}
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
            onClick={() => {
              setIsAudioLoaded(false);
              setPlayQueue(6);
            }}
          ></ButtonTruth>
          {/* <Button
            onClick={() => {
              console.log(fullwidthRef.current);
              document.exitFullscreen();
            }}
          >
            FFFFFFFF
          </Button> */}
          <ButtonLie
            type="button"
            onClick={() => {
              document.exitFullscreen();
              closeModal(false);
              setInterval(goMatrix, 123);
            }}
          ></ButtonLie>
          {isAudioLoaded && (
            <TabletTextBox>
              <TabletAnimationOne>Choose</TabletAnimationOne>
              <TabletAnimationTwo>your</TabletAnimationTwo>
              <TabletAnimationThree>destiny!</TabletAnimationThree>
            </TabletTextBox>
          )}
        </TabletsOverlay>
      )}
      {/* star wars */}
      {playQueue === 6 && <WhoWeAreText>STAR WARS</WhoWeAreText>}
    </BlackBox>
  );
};
