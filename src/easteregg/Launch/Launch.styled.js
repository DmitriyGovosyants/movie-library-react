import styled from "@emotion/styled";
import { device } from "styles/mediaquery";
import starship from '../../data/images/movies/spacex-starship.webp';

export const LaunchBox = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 180px;
  padding: 10px;

  box-shadow: 3px 3px 10px white,
   -3px 3px 10px white,
    3px -3px 10px white,
     -3px -3px 10px white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.2),
      rgba(47, 48, 58, 0.2)
    ),
    url(${starship});

  ${device.mobileM} {
    height: 300px;
  }
  ${device.tabletM} {
    height: 400px;
  }
  ${device.desktopM} {
    height: 50vh;
    width: 50vw;

    border-radius: 20px;
  }
`

export const StartText = styled.div`
  margin-left: auto;
  width: 200px;
`

export const VideoBox = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden; 
  background-color: black;
`

export const LaunchVideo = styled.video`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  /* width: 100%; */
  /* width: 1500px; */
  /* overflow: hidden; */
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

export const BlackBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
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