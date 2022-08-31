import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const MovieQuotesBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  text-align: center;

  ${device.notDesktop} {
    display: none;
  }
`

export const Quote = styled.p`
  font-style: italic;
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.small};
  color: ${p => p.theme.colors.textLinkColor};

  ${device.desktopL} {
    font-size: ${p => p.theme.fontSizes.medium};
  }
`

export const Movie = styled.p`
  font-size: ${p => p.theme.fontSizes.extrasmall};
  color: ${p => p.theme.colors.textSecond};

  ${device.desktopL} {
    font-size: ${p => p.theme.fontSizes.small};
  }
`