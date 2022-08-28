import styled from "@emotion/styled";
// import { device } from "styles/mediaquery";
import starship from '../data/images/launchImg.webp';
import inside from '../data/images/inside.png';
import insideMany from '../data/images/insideMany.jpg';
import tablets from '../data/images/tablets.jpg';

export const BlackBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: black;

  animation-name: overlay;
  animation-duration: ${p => p.timing};
  animation-timing-function: ease;

  @keyframes overlay {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

export const LaunchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  box-shadow: 3px 3px 10px white,
   -3px 3px 10px white,
    3px -3px 10px white,
     -3px -3px 10px white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.1)
    ),
    url(${starship});
`

export const LaunchBtn = styled.button`
  width: 300px;
  height: 300px;
  font-size: ${p => p.theme.fontSizes.titleBig};
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${p => p.theme.colors.textMain};
  background-color: ${p => p.theme.colors.launchBtn};
  border-radius: 50%;
  transition: background-color ${p => p.theme.animation.cubicBezierAverageSpeed};

  :hover {
    background-color: ${p => p.theme.colors.launchBtnHover};
  }
`

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
`

export const TypingTextFirstPart = styled.div`
  margin-bottom: ${p => p.theme.spacing(3)};
  font-size: ${p => p.theme.fontSizes.titleBig};
  font-weight: 700;
  line-height: 1.5;
  color: ${p => p.theme.colors.textMain};
  width: 32ch;
  font-family: monospace;
  white-space: nowrap;
  border-right: 2px solid transparent;
  overflow: hidden;
  animation: displayNoneTwo 4200ms ease, typingOne 2500ms steps(32) 4200ms, blinkOne 450ms step-end 8 alternate;

  @keyframes displayNoneOne {
    from {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes typingOne {
    from {
      width: 0;
    }
  }
      
  @keyframes blinkOne {
    0% {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
    100% {
      border-color: transparent;
    }
  }
`

export const TypingTextSecondPart = styled.div`
  margin-bottom: ${p => p.theme.spacing(3)};
  font-size: ${p => p.theme.fontSizes.titleBig};
  font-weight: 700;
  line-height: 1.5;
  color: ${p => p.theme.colors.textMain};
  width: 29ch;
  font-family: monospace;
  white-space: nowrap;
  border-right: 2px solid;
  overflow: hidden;
  animation: displayNoneTwo 9800ms ease, typingTwo 3200ms steps(29) 9800ms, blinkTwo 500ms step-end infinite alternate;

  @keyframes displayNoneTwo {
    from {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes typingTwo {
    from {
      width: 0;
    }
    to {
    }
  }
      
  @keyframes blinkTwo {
    50% {
      border-color: transparent;
    }
  }
`

export const WhoWeAreText = styled.p`
  position: relative;
  z-index: 10001;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: ${p => p.theme.fontSizes.titleBig};
  letter-spacing: 0.2em;
  color: white;
  opacity: 0;
  padding-left: 10px;
  user-select: none;

  animation-name: appearanceWho;
  animation-duration: 11000ms;
  animation-timing-function: ease-in-out;

  @keyframes appearanceWho {
    0% {
      opacity: 0;
      transform: scale(1);
    }

    22% {
      opacity: 1;
    }

    33% {
      opacity: 1;
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(10);
    }
  }
`

export const InsideOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;

  animation-name: insideOverlay;
  animation-duration: 10000ms;
  animation-delay: 4500ms;
  animation-timing-function: ease-in-out;

  @keyframes insideOverlay {
    0% {
      background-position: center;
    }
    100% {
      background-image: url(${insideMany});
      background-position: center;
    }
  }
`

export const InsideBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-right: 15vw;
  padding-bottom: 10vh;
  opacity: 0;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${inside});

  animation-name: insideAnim;
  animation-duration: 10000ms;
  animation-delay: 3000ms;
  animation-timing-function: ease-in-out;

  @keyframes insideAnim {
    0% {
      opacity: 0;
    }

    10% {
      opacity: 1;
    }

    50% {
      transform: scale(1);
    }

    80% {
      transform: scale(calc(900/${p => p.currentHeight} * 0.078));
    }

    100% {
      transform: scale(calc(900/${p => p.currentHeight} * 0.078));
      opacity: 1;
    }
  }
`

export const TextBoxUp = styled.div`
  overflow: hidden;

  animation-name: textBoxUp;
  animation-duration: 10000ms;
  animation-delay: 3000ms;
  animation-timing-function: ease-in-out;

  @keyframes textBoxUp {
    0% {
      transform: translateY(50%);
    }

    20% {
      transform: translateY(50%);
    }

    30% {
      transform: translateY(0);
    }

    40% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      transform: translateY(0);
    }
  }
`

export const TextBoxDown = styled.div`
  overflow: hidden;

  animation-name: textBoxDown;
  animation-duration: 10000ms;
  animation-delay: 3000ms;
  animation-timing-function: ease-in-out;

  @keyframes textBoxDown {
    0% {
      transform: translateY(-50%);
    }

    20% {
      transform: translateY(-50%);
    }

    30% {
      transform: translateY(0);
    }

    40% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      transform: translateY(0);
    }
  }
`

export const YouText = styled.p`
  opacity: 0;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 80px;
  letter-spacing: 0.1em;
  color: white;

  animation-name: appearanceYou;
  animation-duration: 10000ms;
  animation-delay: 3000ms;
  animation-timing-function: ease-in-out;

  @keyframes appearanceYou {
    0% {
      opacity: 0;
    }

    10% {
      opacity: 1;
    }

    40% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(110%);
    }

    100% {
      opacity: 1;
      transform: translateY(110%);
    }
  }
`

export const AreText = styled.p`
  opacity: 0;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 80px;
  letter-spacing: 0.1em;
  color: white;
  
  animation-name: appearanceAre;
  animation-duration: 10000ms;
  animation-delay: 3000ms;
  animation-timing-function: ease-in-out;

  @keyframes appearanceAre {
    0% {
      opacity: 0;
    }

    7% {
      opacity: 0;
    }

    17% {
      opacity: 1;
    }
    
    40% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-110%);
    }

    100% {
      opacity: 1;
      transform: translateY(-110%);
    }
  }
`

export const InsideText = styled.p`
  opacity: 0;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 10vw;
  line-height: 0.8;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: white;

  animation-name: appearanceInside;
  animation-duration: 10000ms;
  animation-delay: 3000ms;
  animation-timing-function: ease-in-out;

  @keyframes appearanceInside {
     0% {
      opacity: 0;
      
    }

    20% {
      opacity: 0;
      transform: scale(0);
    }

    30% {
      opacity: 1;
      transform: scale(1);
    }

    100% {
      opacity: 1;
    }
  }
`

export const TabletsOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.1)
    ),
    url(${tablets});

  animation-name: tabletsOverlay;
  animation-duration: 2000ms;
  animation-timing-function: ease-in-out;

  @keyframes tabletsOverlay {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

export const TabletTextBox = styled.div`
  display: flex;
  column-gap: 30px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: ${p => p.theme.fontSizes.titleBig};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: red;
  opacity: 1;
  user-select: none;
`

export const TabletAnimationOne = styled.p`
  animation-name: tabletAnimationOne;
  animation-duration: 15000ms;
  animation-timing-function: ease-in-out;

  @keyframes tabletAnimationOne {
    0% {
      opacity: 0;
    }
    31% {
      opacity: 0;
    }
    32% {
      opacity: 1;
    }
    79% {
      transform: scale(1);
    }
    80% {
      transform: scale(1.2);
    }
    85% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`

export const TabletAnimationTwo = styled.p`
  animation-name: tabletAnimationTwo;
  animation-duration: 15000ms;
  animation-timing-function: ease-in-out;

  @keyframes tabletAnimationTwo {
    0% {
      opacity: 0;
    }
    35% {
      opacity: 0;
    }
    36% {
      opacity: 1;
    }
    83% {
      transform: scale(1);
    }
    84% {
      transform: scale(1.2);
    }
    89% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1.0);
    }
  }
`

export const TabletAnimationThree = styled.p`
  animation-name: tabletAnimationThree;
  animation-duration: 15000ms;
  animation-timing-function: ease-in-out;

  @keyframes tabletAnimationThree {
    0% {
      opacity: 0;
    }
    38% {
      opacity: 0;
    }
    39% {
      opacity: 1;
    }
    87% {
      transform: scale(1);
    }
    88% {
      transform: scale(1.2);
    }
    94% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`

export const ButtonTruth = styled.button`
  position: fixed;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
  width: 20vw;
  height: 20vw;

  :hover {
    border: 3px solid red;

    animation-name: tabletLeft;
    animation-duration: 500ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;

    @keyframes tabletLeft {
      0% {
        transform: scale(1) rotateZ(0) translateY(-50%);
      }
      50% {
        transform: scale(1.3) rotateZ(10deg) translateY(-50%);
      }
      100% {
        transform: scale(1) rotateZ(0) translateY(-50%);
      }
    }
  }
`

export const ButtonLie = styled.button`
  position: fixed;
  top: 50%;
  right: 15%;
  transform: translateY(-50%);
  width: 20vw;
  height: 20vw;

  :hover {
    border: 3px solid violet;

    animation-name: tabletRigth;
    animation-duration: 500ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;

    @keyframes tabletRigth {
      0% {
        transform: scale(1) rotateZ(0) translateY(-50%);
      }
      50% {
        transform: scale(1.3) rotateZ(-10deg) translateY(-50%);
      }
      100% {
        transform: scale(1) rotateZ(0) translateY(-50%);
      }
    }
  }
`