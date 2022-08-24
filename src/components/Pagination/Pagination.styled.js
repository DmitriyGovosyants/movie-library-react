import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const PaginationBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: ${p => p.theme.spacing(10)};
  padding-bottom: ${p => p.theme.spacing(10)};
`

export const BtnList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  margin-right: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(4)} ${p => p.theme.spacing(2)};
  
  color: ${p => p.theme.colors.textMain};
  background-color: ${p => p.theme.colors.bgThird};
  border-radius: 5px;
  transition: background-color ${p => p.theme.animation.cubicBezierAverageSpeed};
  
  :disabled {
    background-color: ${p => p.theme.colors.btnBgDisabled};
  }

  ${device.mobileBelowM} {
    margin-bottom: ${p => p.theme.spacing(1)};
  }

  ${device.desktopM} {
    :hover {
      background-color: ${p => p.theme.colors.accentColor};
    }
  }
`

export const Dots = styled.span`
  margin-right: ${p => p.theme.spacing(2)};
  padding-bottom: ${p => p.theme.spacing(4)};
  min-width: 50px;
  
  font-size: 30px;
  letter-spacing: 0.2em;
  text-align: center;

  ${device.mobileBelowM} {
    width: 100%;
  }
`