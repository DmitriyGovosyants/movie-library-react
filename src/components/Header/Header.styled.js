import styled from "@emotion/styled";
import mobileBg from '../../images/header/header-bg-mobile@1x.jpg';
import tabletBg from '../../images/header/header-bg-tablet@1x.jpg';
import desktopBg from '../../images/header/header-bg-desktop@1x.jpg';
import { device } from "utils/mediaquery";

export const HeaderBox = styled.header`
  background-repeat: no-repeat;
  background-size: cover;

  padding-top: ${({theme: {spacing}}) => spacing(10)};
  padding-bottom: ${({theme: {spacing}}) => spacing(10)};
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${mobileBg});
  
  @media ${device.tablet} {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${tabletBg});
  }

  @media ${device.desktop} {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${desktopBg});
  }
`