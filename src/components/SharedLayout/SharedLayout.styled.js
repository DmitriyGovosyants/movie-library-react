import styled from "@emotion/styled";
import mobileBg from '../../data/images/header/header-bg-mobile@1x.jpg';
import tabletBg from '../../data/images/header/header-bg-tablet@1x.jpg';
import desktopBg from '../../data/images/header/header-bg-desktop@1x.jpg';
import { device } from "utils/mediaquery";

export const HeaderBox = styled.header`
  height: 120px;
  background-repeat: no-repeat;
  background-size: cover;

  padding-top: ${p => p.theme.spacing(5)};
  padding-bottom: ${p => p.theme.spacing(5)};
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${mobileBg});
  
  ${device.tabletM} {
    padding-top: ${p => p.theme.spacing(10)};
    padding-bottom: ${p => p.theme.spacing(10)};

    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${tabletBg});
  }

  ${device.desktopM} {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${desktopBg});
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px);

  ${device.tabletM} {
    height: calc(100vh - 160px);
  }
`

export const Main = styled.main`
  flex-grow: 1;
`