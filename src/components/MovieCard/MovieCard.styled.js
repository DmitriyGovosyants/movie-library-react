import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const MovieCardBox = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme: {colors}}) => colors.bgSecond};
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
  padding-top: ${({ theme: { spacing } }) => spacing(1)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(1)};
  padding-left: ${({ theme: { spacing } }) => spacing(2)};
  padding-right: ${({ theme: { spacing } }) => spacing(12)};

  font-size: 26px;
  line-height: 1.5;
  text-align: center;
  background-image: linear-gradient( 35deg, #c3d1ff 10%, #9452A5 100%);
  border-top: 10px;

  ${device.mobileM} {
    padding: ${({ theme: { spacing } }) => spacing(1)} ${({ theme: { spacing } }) => spacing(12)};
  }

  ${device.tabletM} {
    line-height: 2;
  }
`

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 8px;
  color: #FF2662;

  :hover {
    color: red;
  }

  ${device.tabletM} {
    top: 8px;
  }
`

export const MovieCardWrapper = styled.div`
  width: 100%;
  

  ${device.tabletM} {
    display: flex;
  }

  ${device.desktopM} {
  }
`

export const PosterBox = styled.div`
  ${device.mobileBelowM} {
    /* position: relative; */
    padding-bottom: 150%;
    height: 0;
    /* overflow: hidden;
    margin-left: auto;
    margin-right: auto; */
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
    padding: ${({ theme: { spacing } }) => spacing(2)};
  }
`

export const MovieCardContent = styled.div`
  width: 100%;
  padding: ${({ theme: { spacing } }) => spacing(5)};
`

export const InfoList = styled.ul`
  margin-bottom: ${({ theme: { spacing } }) => spacing(6)};
`

export const InfoItem = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: ${({ theme: { spacing } }) => spacing(2)};
  }
`

export const InfoLabel = styled.p`
  /* font-size: 18px; */
`

export const InfoValue = styled.p`
  margin-left: ${({ theme: { spacing } }) => spacing(2)};
  font-size: 16px;
  font-weight: 500;
`

export const RatingList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing(6)};
  padding: 10px 0;

  /* background-color: white; */
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

export const RatingLabel = styled.p`
  
`

export const RatingValue = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  padding: ${({ theme: { spacing } }) => spacing(2)};

  font-size: 18px;
  font-weight: 700;
  text-align: center;
`

export const AboutBox = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing(6)};
`

export const AboutLabel = styled.p`
  margin-bottom: ${({ theme: { spacing } }) => spacing(2)};
  font-size: 18px;
  font-weight: 500;
`

export const AboutText = styled.p`
  font-size: 14px;
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
  padding: ${({ theme: { spacing } }) => spacing(4)};

  color: white;
  text-transform: uppercase;
  background-color: #FF2662;
  border-radius: 10px;

  :hover {
    background-color: red;
  }
`