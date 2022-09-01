import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const BtnClose = styled.button`
  position: absolute;
  top: 4px;
  right: 8px;
  z-index: 40;
  color: ${p => p.theme.colors.bgSecond};
  transition: color ${p => p.theme.animation.cubicBezierAverageSpeed};

  :hover {
    color: ${p => p.theme.colors.accentColor};
  }
  ${device.tabletM} {
    top: 8px;
  }
`