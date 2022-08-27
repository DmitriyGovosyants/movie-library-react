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
  animation-duration: 3000ms;
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