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

  :hover {
    color: ${p => p.theme.colors.accentColor};
  }

  ${device.tabletM} {
    top: 8px;
  }
`

export const MovieCardWrapper = styled.div`
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
  padding: ${p => p.theme.spacing(5)};
`

export const InfoList = styled.ul`
  margin-bottom: ${p => p.theme.spacing(6)};
`

export const InfoItem = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(2)};
  }
`

export const InfoValue = styled.p`
  margin-left: ${p => p.theme.spacing(2)};
  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: 500;
`

export const RatingList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: ${p => p.theme.spacing(6)};
  padding: 10px 0;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
`

export const RatingItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  :not(:last-child) {
    margin-right: 10px;
  }

  ${device.mobileM} {
    min-width: 100px;
  }
  
`

export const RatingValue = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  padding: ${p => p.theme.spacing(2)};

  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: 700;
  text-align: center;
`

export const AboutBox = styled.div`
  margin-bottom: ${p => p.theme.spacing(6)};
`

export const AboutLabel = styled.p`
  margin-bottom: ${p => p.theme.spacing(2)};
  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: 500;
`

export const AboutText = styled.p`
  font-size: ${p => p.theme.fontSizes.small};
  line-height: 1.5;
`

export const ButtonList = styled.ul`
  display: flex;
`

export const ButtonItem = styled.li`
  display: inline-block;
  :not(:last-child) {
    margin-right: 10px;
  }
`

export const LibraryBtn = styled.button`
  padding: ${p => p.theme.spacing(4)};

  color: ${p => p.theme.colors.textMain};
  text-transform: uppercase;

  background-color: ${p => p.theme.colors.btnBg};
  border-radius: 10px;

  :hover {
    background-color: ${p => p.theme.colors.accentColor};
  }
`