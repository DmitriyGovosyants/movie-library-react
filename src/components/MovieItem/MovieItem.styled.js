import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const MovieItemBox = styled.li`
  flex-basis: calc((100% - 16.5px) / 2);

  ${device.tabletM} {
    flex-basis: calc((100% - 33px) / 3);
  }
  ${device.desktopM} {
    flex-basis: calc((100% - 66px) / 5);
  }
`

export const PosterBox = styled.div`
  position: relative;
  margin-bottom: ${p => p.theme.spacing(1)};

  ${device.tabletM} {
    margin-bottom: ${p => p.theme.spacing(2)};
  }
  ${device.desktopM} {
    transition: box-shadow ${p => p.theme.animation.cubicBezierAverageSpeed};

    :hover {
      box-shadow: 3px 3px 10px black;
      cursor: pointer;
    }
  }
`

export const Poster = styled.img`
  width: 100%;
  object-fit: cover;
  height: 60vw;

  ${device.mobileM} {
    height: 310px;
  }
  ${device.tabletM} {
    height: 340px;
  }
  ${device.desktopM} {
    height: 271px;
  }
  ${device.desktopL} {
    height: 380px;
  }
`

export const MovieRating = styled.span`
  position: absolute;
  bottom: 5px;
  left: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;

  font-size: 12px;
  font-weight: 600;
  color: #fff;
  background-color: red;
  border-radius: 5px;

  ${device.mobileM} {
    font-size: 22px;
  }
`

export const MovieYear = styled.span`
  position: absolute;
  right: 5px;
  bottom: 8px;
  
  font-size: ${p => p.theme.fontSizes.small};
  font-weight: 600;
  color: ${p => p.theme.colors.textMain};
  text-shadow: -1px -1px 0 #a82727, 0 -1px 0 #a82727, 1px -1px 0 #a82727, 1px 0 0 #a82727, 1px 1px 0 #a82727, 0 1px 0 #a82727, -1px 1px 0 #a82727, -1px 0 0 #a82727;

  ${device.mobileM} {
    font-size: 20px;
  }
`

export const MovieTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.small};
  font-weight: 500;
  line-height: 1.33;
  overflow-wrap: anywhere;

  ${device.mobileOnly} {
    text-align: center;
  }

  ${device.mobileM} {
    font-size: ${p => p.theme.fontSizes.medium};
  }

  ${device.desktopL} {
    font-size: ${p => p.theme.fontSizes.large};
  }
`