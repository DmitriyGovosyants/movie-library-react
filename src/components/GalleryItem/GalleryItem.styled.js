import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const FilmCard = styled.li`
  @media ${device.mobileOnly} {
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

export const Poster = styled.img`
  width: 100%;
  margin-bottom: ${({ theme: { spacing } }) => spacing(3)};
  object-fit: cover;
  border-radius: 10px;

  @media ${device.tablet} {
    height: 480px;
  }

  @media ${device.desktop} {
    transition: transform ${({theme: {animation}})=> animation.cubicBezier};

    :hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }

  @media ${device.desktopM} {
    height: 380px;
  }
`

export const FilmTitle = styled.p`
  font-size: ${({ theme: {fontSizes}}) => fontSizes.medium};
  font-weight: 500;
  line-height: 1.33;
`