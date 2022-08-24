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
  column-gap: ${p => p.theme.spacing(1)};
  row-gap: ${p => p.theme.spacing(1)};
  
  ${device.mobileM} {
    column-gap: ${p => p.theme.spacing(2)};
  }
`

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30px;
  padding: 3vw 2vw;
  
  font-size: 14px;
  color: ${p => p.theme.colors.textMain};
  background-color: ${p => p.theme.colors.bgThird};
  border-radius: 5px;
  transition: background-color ${p => p.theme.animation.cubicBezierAverageSpeed};
  
  :disabled {
    background-color: ${p => p.theme.colors.btnBgDisabled};
  }

  ${device.mobileM} {
    min-width: 50px;
    padding: 16px 8px;
    font-size: 16px;
  }

  ${device.desktopM} {
    :hover:enabled {
      background-color: ${p => p.theme.colors.accentColor};
    }
  }
`