import styled from "@emotion/styled";
// import { device } from "styles/mediaquery";
import starship from '../data/images/launchImg.webp';

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

export const LaunchVideo = styled.video`
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
      opacity: 0
    }
    to {
      opacity: 0
    }
  }

  @keyframes typingOne {
    from {
      width: 0
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
      opacity: 0
    }
    to {
      opacity: 0
    }
  }

  @keyframes typingTwo {
    from {
      width: 0
    }
    to {
    }
  }
      
  @keyframes blinkTwo {
    50% {
      border-color: transparent
    }
  }
`

export const WhoWeAreText = styled.p`
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: ${p => p.theme.fontSizes.titleBig};
  letter-spacing: 0.2em;
  color: white;
  z-index: 1;
  opacity: 0;
  padding-left: 10px;

  animation-name: appearance;
  animation-duration: 11000ms;
  animation-timing-function: ease-in-out;

  @keyframes appearance {
    0% {
      opacity: 0;
      transform: scale(1)
    }

    22% {
      opacity: 1;
    }

    33% {
      opacity: 1;
      transform: scale(1)
    }

    100% {
      opacity: 0;
      transform: scale(10)
    }
  }
`