import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const MovieCardBox = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  background-color: ${p => p.theme.colors.bgMain};
  border-radius: 15px;

  ${device.tabletM} {
    width: 700px
  }
  ${device.desktopM} {
    width: 800px
  }
`

export const TitleBox = styled.div`
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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

export const NavBtn = styled.button`
  display: none;
  
  ${device.desktopM} {
    position: absolute;
    top: 50%;
    left: ${p => p.left ? '-100px' : '100%'};
    transform: translateY(-50%);

    display: block;
    height: 200px;
    color: white;
    
    border-bottom-left-radius: ${p => p.left ? '200px' : '0'};
    border-bottom-right-radius: ${p => p.rigth ? '200px' : '0'};
    border-top-left-radius: ${p => p.left ? '200px' : '0'};
    border-top-right-radius: ${p => p.rigth ? '200px' : '0'};
    transition: background-color ${p => p.theme.animation.cubicBezierAverageSpeed};

    :active {
      background-color: ${p => p.theme.colors.lowOpacityBg};
    }
  }
`