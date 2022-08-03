import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const FilmCard = styled.li`
  flex-basis: calc((100% - 33px) / 3);

  :not(:nth-of-type(3n)) {
    margin-right: 16.5px;
  }

  @media ${device.mobileOnly} {
    :not(:nth-last-of-type(-n + 3)) {
      margin-bottom: 18px;
    }
  }

  @media ${device.tabletOnly} {
    :not(:nth-last-of-type(-n + 3)) {
      margin-bottom: 32px;
    }
  }

  @media ${device.desktop} {
    flex-basis: calc((100% - 66px) / 5);

    :not(:nth-last-of-type(-n + 5)) {
      margin-bottom: 32px;
    }

    :not(:nth-of-type(3n)) {
      margin-right: 0;
    }

    :not(:nth-of-type(5n)) {
      margin-right: 16.5px;
    }
  }
`

export const PosterThumb = styled.div`
  position: relative;
  margin-bottom: ${({ theme: { spacing } }) => spacing(1)};

  @media ${device.tablet} {
    margin-bottom: ${({ theme: { spacing } }) => spacing(2)};
  }

  @media ${device.desktop} {
    transition: box-shadow ${({theme: {animation}})=> animation.cubicBezier};

    :hover {
      box-shadow: 3px 3px 10px black;
      cursor: pointer;
    }
  }
`

export const Poster = styled.img`
  width: 100%;
  height: 125px;
  
  object-fit: cover;

  @media ${device.mobileL} {
    height: 205px;
  }

  @media ${device.tablet} {
    height: 340px;
  }

  @media ${device.desktop} {
    height: 271px;
  }

  @media ${device.desktopM} {
    height: 380px;
  }
`

export const RatingData = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px;

  font-size: 8px;
  font-weight: 600;
  color: #fff;
  background-color: red;
  border-radius: 5px;

  @media ${device.mobileL} {
    bottom: 5px;
    left: 5px;
    padding: 5px;
    font-size: 12px;
  }

  @media ${device.tablet} {
    font-size: 22px;
  }
`

export const FilmYear = styled.span`
  position: absolute;
  right: 1px;
  bottom: 3px;
  
  font-weight: 600;
  color: #fff;
  
  font-size: 8px;
  text-shadow: -1px -1px 0 #a82727, 0 -1px 0 #a82727, 1px -1px 0 #a82727, 1px 0 0 #a82727, 1px 1px 0 #a82727, 0 1px 0 #a82727, -1px 1px 0 #a82727, -1px 0 0 #a82727;

  @media ${device.mobileL} {
    right: 5px;
    bottom: 8px;
    font-size: 12px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }
`

export const FilmTitle = styled.h2`
  font-size: 8px;
  font-weight: 500;
  line-height: 1.33;

  @media ${device.mobileL} {
    font-size: 12px;
  }

  @media ${device.tablet} {
    font-size: 16px;
  }
`