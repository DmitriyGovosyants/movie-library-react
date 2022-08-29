import { ButtonClose } from 'components';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import starlink from '../data/images/where-is-your-starlink.png';
import shuttle from '../data/video/space-shuttle-launch-countdown.mp4';
import smallStep from '../data/audio/small-step.mp3';
import whoWeAreAudio from '../data/audio/who-we-are.mp3';
import whoWeAreVideo from '../data/video/who-we-are.webm';
import tabletsAudio from '../data/audio/mortal-combat.mp3';
import matrixAudio from '../data/audio/matrix.mp3';
import { matrixFn } from 'easteregg/Matrix';
import { EEgg } from 'constants/constants';
import { StarWars } from 'easteregg/StarWars/StarWars';
import {
  BlackBox,
  Overlay,
  LaunchBox,
  LaunchBtn,
  Video,
  ArmstrongTextFirst,
  ArmstrongTextSecond,
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
  TabletsTextOne,
  TabletsTextTwo,
  TabletsTextThree,
  ButtonTruth,
  ButtonLie,
} from './Launch.styled';

export const Launch = ({ closeModal }) => {
  const [playQueue, setPlayQueue] = useState(EEgg.MENU);
  const [overlay, setOverlay] = useState(false);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const overlayTimerIdRef = useRef(null);
  const whoWeAreVideoRef = useRef(null);
  const whoWeAreAudioRef = useRef(null);
  const combatAudioRef = useRef(null);
  const matrixAudioRef = useRef(null);
  const fullwidthRef = useRef(null);

  useEffect(() => {
    if (isAudioLoaded && isVideoLoaded) {
      whoWeAreVideoRef.current?.play();
      whoWeAreAudioRef.current?.play();
    }
  }, [isAudioLoaded, isVideoLoaded]);

  useEffect(() => {
    if (playQueue === EEgg.INSIDE) {
      setTimeout(() => {
        setPlayQueue(EEgg.TABLETS);
      }, 12000);
    }
  }, [playQueue]);

  const addOverlay = queueStatus => {
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
        setPlayQueue(queueStatus);
      }
    }, 1000);
  };

  const toLaunch = () => {
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
      setPlayQueue(EEgg.LAUNCH);
    }, 4000);

    fullwidthRef.current
      .requestFullscreen({ navigationUI: 'hide' })
      .catch(err => console.log(err));
  };

  const toStarWars = () => {
    setIsAudioLoaded(false);
    setPlayQueue(EEgg.STAR_WARS);
  };

  const toMatrix = () => {
    document.exitFullscreen();
    setPlayQueue(EEgg.MATRIX);
    combatAudioRef.current.pause();
    matrixAudioRef.current.play();
    setInterval(matrixFn, 123);
  };

  let currentWindowHeight = window.innerHeight;

  return (
    <BlackBox ref={fullwidthRef}>
      <ButtonClose onClick={() => closeModal(false)} />
      {overlay && <Overlay timing={'4000ms'} />}

      {playQueue === EEgg.MENU && (
        <LaunchBox>
          <LaunchBtn type="button" onClick={toLaunch}>
            into space
          </LaunchBtn>
        </LaunchBox>
      )}

      {playQueue === EEgg.LAUNCH && (
        <Video
          poster={starlink}
          autoPlay
          onPlay={() => addOverlay(EEgg.ARMSTRONG)}
        >
          <source src={shuttle} type="video/mp4" />
          Your browser does not support the <code>video</code> element.
        </Video>
      )}

      {playQueue === EEgg.ARMSTRONG && (
        <>
          {isAudioLoaded && (
            <>
              <ArmstrongTextFirst>
                “That’s one small step for man,
              </ArmstrongTextFirst>
              <ArmstrongTextSecond>
                one giant leap for mankind.”
              </ArmstrongTextSecond>
            </>
          )}
          <audio
            autoPlay
            onPlay={() => {
              setIsAudioLoaded(true);
              addOverlay(EEgg.WHO_WE_ARE);
            }}
          >
            <source src={smallStep} type="audio/mp3" />
            Your browser does not support the <code>audio</code> element.
          </audio>
        </>
      )}

      {playQueue === EEgg.WHO_WE_ARE && (
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
              setPlayQueue(EEgg.INSIDE);
            }}
          >
            <source src={whoWeAreAudio} type="audio/mp3" />
            Your browser does not support the <code>audio</code> element.
          </audio>
        </>
      )}

      {playQueue === EEgg.INSIDE && (
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

      {playQueue === EEgg.TABLETS && (
        <TabletsOverlay>
          <audio
            ref={matrixAudioRef}
            onLoadedData={() => (matrixAudioRef.current.volume = 0.3)}
            loop
          >
            <source src={matrixAudio} type="audio/mp3" />
            Your browser does not support the <code>audio</code> element.
          </audio>
          <audio
            ref={combatAudioRef}
            onLoadedData={() => {
              combatAudioRef.current.volume = 0.3;
              setIsAudioLoaded(true);
            }}
            autoPlay
            controls
            loop
            style={{ height: '20px' }}
          >
            <source src={tabletsAudio} type="audio/mp3" />
            Your browser does not support the <code>audio</code> element.
          </audio>
          <ButtonTruth type="button" onClick={toStarWars}></ButtonTruth>
          <ButtonLie type="button" onClick={toMatrix}></ButtonLie>
          {isAudioLoaded && (
            <TabletTextBox>
              <TabletsTextOne>Choose</TabletsTextOne>
              <TabletsTextTwo>your</TabletsTextTwo>
              <TabletsTextThree>destiny!</TabletsTextThree>
            </TabletTextBox>
          )}
        </TabletsOverlay>
      )}

      {playQueue === EEgg.STAR_WARS && (
        <StarWars
          setIsAudioLoaded={setIsAudioLoaded}
          isAudioLoaded={isAudioLoaded}
        />
      )}
    </BlackBox>
  );
};
