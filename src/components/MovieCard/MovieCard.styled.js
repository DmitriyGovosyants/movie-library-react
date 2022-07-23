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

  @media ${device.tablet} {
    width: 700px
  }

  @media ${device.desktop} {
    width: 800px
  }
`

export const Title = styled.h3`
  padding: ${({ theme: { spacing } }) => spacing(1)} ${({ theme: { spacing } }) => spacing(12)};;
  
  text-align: center;
  background-image: linear-gradient( 35deg, #c3d1ff 10%, #9452A5 100%);
  border-top: 10px;

  @media ${device.mobile} {
    font-size: 26px;
    line-height: 1.5;
  }

  @media ${device.tablet} {
    line-height: 2;
  }
`

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  color: #FF2662;

  :hover {
    color: red;
  }
`

export const MovieCardWrapper = styled.div`
  width: 100%;
  

  @media ${device.tablet} {
    display: flex;
  }

  @media ${device.desktop} {
  }
`

export const Poster = styled.img`
  @media ${device.mobileL} {
    max-width: 300px;
    height: 380px;
  }
  @media ${device.mobileOnly} {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${({ theme: { spacing } }) => spacing(2)};
  }
  
  @media ${device.tablet} {
    margin-right: ${({ theme: { spacing } }) => spacing(10)};
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

  @media ${device.mobileL} {
    min-width: 100px;
  }
  
`

export const RatingLabel = styled.p`
  
`

export const RatingValue = styled.span`
  display: flex;
  align-items: center;
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