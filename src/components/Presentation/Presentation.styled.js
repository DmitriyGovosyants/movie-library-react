import styled from "@emotion/styled";
import { device } from "styles/mediaquery";
import starship from '../../data/images/movies/spacex-starship.webp';

export const PresentationBox = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 180px;
  padding-bottom: 10px;

  border-radius: 20px;
  border: 5px solid white;
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
    width: 70vw;
  }
`

export const StartText = styled.div`
  margin: 0 auto;
  width: 250px;
`