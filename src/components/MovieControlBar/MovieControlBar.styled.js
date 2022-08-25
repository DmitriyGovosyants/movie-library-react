import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const SearchStatusList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${p => p.theme.spacing(4)} 0;
  ${device.tabletM} {
    align-items: flex-end;
    padding: ${p => p.theme.spacing(4)};
  }
`

export const SearchStatusItem = styled.li`
  display: flex;
  align-items: center;
`

export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: ${p => p.theme.spacing(2)};
`

export const TrendBox = styled.div`
  display: flex;
  justify-content: center;
`

