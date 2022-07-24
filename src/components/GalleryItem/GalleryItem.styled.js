import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const FilmCard = styled.li`
  @media ${device.mobileOnly} {
    display: flex;
    flex-direction: column;
    max-width: 440px;
    :not(:last-child) {
      margin-bottom: 30px;
    }
  }
  
  @media ${device.tablet} {
    flex-basis: calc((100% - 32px) / 2);
  }

  @media ${device.tabletOnly} {
    :not(:nth-last-of-type(-n + 2)) {
      margin-bottom: 32px;
    }

    :nth-of-type(2n + 1) {
      margin-right: 32px;
    }
  }

  @media ${device.desktop} {
    flex-basis: calc((100% - 33px) / 3);

    :not(:nth-last-of-type(-n + 3)) {
      margin-bottom: 32px;
    }

    :not(:nth-of-type(3n)) {
      margin-right: 16.5px;
    }
  }

  @media ${device.desktopM} {
    flex-basis: calc((100% - 66px) / 5);

    :not(:nth-last-of-type(-n + 3)) {
      margin-bottom: 0;
    }

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
  margin-bottom: ${({ theme: { spacing } }) => spacing(2)};

  @media ${device.desktop} {
    transition: transform ${({theme: {animation}})=> animation.cubicBezier};

    :hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`

export const Poster = styled.img`
  width: 100%;
  height: 420px;
  
  object-fit: cover;
  border-radius: 10px;

  @media ${device.mobileL} {
    height: 640px;
  }

  @media ${device.tablet} {
    height: 500px;
  }

  @media ${device.desktopM} {
    height: 380px;
  }
`

export const RatingData = styled.span`
  position: absolute;
  bottom: 5px;
  left: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;

  font-size: 22px;
  font-weight: 600;
  color: #fff;
  background-color: red;
  border-radius: 5px;

  @media ${device.mobileOnly} {
    font-size: 30px;
  }
`

export const FilmYear = styled.span`
  position: absolute;
  right: 5px;
  bottom: 8px;
  
  font-weight: 600;
  color: #fff;
  
  font-size: 20px;
  text-shadow: -1px -1px 0 #a82727, 0 -1px 0 #a82727, 1px -1px 0 #a82727, 1px 0 0 #a82727, 1px 1px 0 #a82727, 0 1px 0 #a82727, -1px 1px 0 #a82727, -1px 0 0 #a82727;

  @media ${device.mobileOnly} {
    font-size: 30px;
  }
`

export const FilmTitle = styled.h2`
  font-size: ${({ theme: {fontSizes}}) => fontSizes.medium};
  font-weight: 500;
  line-height: 1.33;

  @media ${device.mobileOnly} {
    font-size: 24px;
    /* text-align: center; */
  }
`