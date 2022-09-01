import { useState, useRef } from 'react';
import starWarsAudio from '../../data/easteregg/audio/star-wars.mp3';
import light from '../../data/easteregg/images/light.jpg';
import {
  StarWarsOverlay,
  Start,
  MainTitle,
  TitlesOverlay,
  TitlesContent,
  TitlesCentered,
  Titles,
  Light,
} from './StarWars.styled';

export const StarWars = ({ setIsAudioLoaded, isAudioLoaded }) => {
  const starWarsRef = useRef(null);
  const [isLoadImg, setIsLoadImg] = useState(false);

  const startMusic = () => {
    setIsAudioLoaded(true);

    setTimeout(() => {
      starWarsRef.current.volume = 0.3;
      starWarsRef.current.play();
    }, 5000);

    setTimeout(() => {
      setIsLoadImg(true);
    }, 19000);
  };

  return (
    <>
      {isAudioLoaded && (
        <StarWarsOverlay>
          {isLoadImg && <Light src={light} alt={'light'} side={'20%'}></Light>}
          <Start>A long time ago in a galaxy far, far away...</Start>
          <MainTitle>STAR WARS</MainTitle>
          <TitlesOverlay>
            <TitlesContent>
              <TitlesCentered>EPISODE I</TitlesCentered>
              <TitlesCentered>A NEW HOPE</TitlesCentered>

              <Titles>
                This is the period of conflict between the forces of Light and
                Shadow
              </Titles>

              <Titles>
                Shadow was great and very terrible. It threatened to completely
                destroy Light. No one believed that the Light could long resist
                the forces of Shadow.
              </Titles>

              <Titles>
                Light was small but libertarian. By its strength of will and
                steadfast spirit, Light exhausted the adversary.
              </Titles>

              <Titles>And finally broke the back of true Shadow.</Titles>

              <Titles>May the Force be with us!</Titles>

              <TitlesCentered>Glory to Ukraine!</TitlesCentered>
            </TitlesContent>
          </TitlesOverlay>
        </StarWarsOverlay>
      )}
      <audio ref={starWarsRef} onLoadedData={() => startMusic()}>
        <source src={starWarsAudio} type="audio/mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
    </>
  );
};
