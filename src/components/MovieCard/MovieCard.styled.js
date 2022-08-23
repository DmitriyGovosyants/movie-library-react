import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const MovieCardBox = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  background-color: ${p => p.theme.colors.bgMain};
  border-radius: 10px;
  overflow: hidden;

  ${device.tabletM} {
    width: 700px
  }
  ${device.desktopM} {
    width: 800px
  }
`

export const Title = styled.h3`
  padding-top: ${p => p.theme.spacing(1)};
  padding-bottom: ${p => p.theme.spacing(1)};
  padding-left: ${p => p.theme.spacing(2)};
  padding-right: ${p => p.theme.spacing(12)};

  font-size: ${p => p.theme.fontSizes.large};
  line-height: 1.5;
  text-align: center;
  background-image: linear-gradient( 35deg, #c3d1ff 10%, #9452A5 100%);
  border-top: 10px;

  ${device.mobileM} {
    padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(12)};
  }
  ${device.tabletM} {
    line-height: 2;
  }
`

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 8px;
  color: ${p => p.theme.colors.bgSecond};
  transition: color ${p => p.theme.animation.cubicBezierAverageSpeed};

  :hover {
    color: ${p => p.theme.colors.accentColor};
  }

  ${device.tabletM} {
    top: 8px;
  }
`

export const FlexContainer = styled.div`
  ${device.tabletM} {
    display: flex;
  }
`

export const PosterBox = styled.div`
  ${device.mobileBelowM} {
    padding-bottom: 150%;
    height: 0;
  }
`
export const Poster = styled.img`
  ${device.mobileM} {
    margin-left: auto;
    margin-right: auto;
    max-width: 300px;
    height: 380px;
  }
  
  ${device.tabletM} {
    width: 253px;
    padding: ${p => p.theme.spacing(2)};
  }
`

export const MovieCardContent = styled.div`
  width: 100%;
  padding-top: ${p => p.theme.spacing(2)};
  padding-bottom: ${p => p.theme.spacing(5)};
  padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};
`