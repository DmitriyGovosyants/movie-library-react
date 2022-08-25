import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

// StatusBox сделать отдельным компонентом для двух страниц???

export const StatusBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(2)};
  height: 100%; // может не надо

  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: 500;
  text-transform: uppercase;
  color: ${p => p.theme.colors.textSecond};
  box-shadow: inset 1px 1px 20px ${p => p.theme.colors.bgSecond},
   inset -1px -1px 20px ${p => p.theme.colors.bgSecond},
   inset 1px -1px 20px ${p => p.theme.colors.bgSecond},
   inset -1px 1px 20px ${p => p.theme.colors.bgSecond};

  ${device.mobileOnly} {
    flex-direction: column;
  }
  ${device.tabletM} {
    align-items: center;
  }
`

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: ${p => p.theme.spacing(3)};
`

export const SortBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${p => p.theme.spacing(3)};
`

export const SortBtn = styled.label`
  padding: ${p => p.theme.spacing(2)};
  
  color: ${p => p.theme.colors.textMain};
  text-transform: uppercase;
  
  background-color: ${p => p.isCheck ? p => p.theme.colors.checkColor : p => p.theme.colors.btnBg};
  border-radius: 10px;
  transition: background-color ${p => p.theme.animation.cubicBezierAverageSpeed};
  cursor: pointer;

  :hover {
    background-color: ${p => p.isCheck ? p.theme.colors.checkColor : p => p.theme.colors.accentColor};
  }
  
`

export const SortInputIsHidden = styled.input`
  visibility: hidden;
  width: 0;
`

export const FilterGenre = styled.select`
`