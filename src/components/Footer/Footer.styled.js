import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const FooterBox = styled.footer`
  text-align: center;
  background-color: ${p => p.theme.colors.bgThird};
`

export const FlexContainer = styled.div`
  ${device.tabletM} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const FooterText = styled.p`
  font-size: ${p => p.theme.fontSizes.small};
  color: ${p => p.theme.colors.textMain};
  line-height: 1.5;
  ${device.mobileOnly} {
    margin-bottom: ${p => p.theme.spacing(2)};
  }
  ${device.tabletM} {
    margin-right: ${p => p.theme.spacing(2)};
  }
`

export const FooterLink = styled.a`
  font-size: ${p => p.theme.fontSizes.small};
  font-weight: 500;
  color: ${p => p.theme.colors.textFourth};

  transition: color ${p => p.theme.animation.cubicBezierAverageSpeed};

  :hover {
    color: ${p => p.theme.colors.textLinkColor};
  }
`