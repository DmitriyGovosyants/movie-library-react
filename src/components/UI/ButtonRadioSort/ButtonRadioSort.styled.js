import styled from "@emotion/styled"
import { device } from "styles/mediaquery"

export const SortBtn = styled.label`
  padding: ${p => p.theme.spacing(2)};
  
  color: ${p => p.theme.colors.textMain};
  text-transform: uppercase;
  
  background-color: ${p => p.isCheck ? p => p.theme.colors.checkColor : p => p.theme.colors.btnBg};
  border-radius: 10px;
  transition: background-color ${p => p.theme.animation.cubicBezierAverageSpeed};
  
  :hover {
    background-color: ${p => p.isCheck ? p.theme.colors.checkColor : p => p.theme.colors.accentColor};
  }
  ${device.desktopM} {
    cursor: pointer;
  }
`

export const SortInputIsHidden = styled.input`
  visibility: hidden;
  width: 0;
`