import styled from "@emotion/styled";
import { device } from "styles/mediaquery";
import starship from '../../data/images/movies/spacex-starship.webp';

export const LaunchBox = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 180px;
  padding: 10px;

  border-radius: 20px;
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
  }
`

export const StartText = styled.div`
  margin-left: auto;
  width: 250px;
`