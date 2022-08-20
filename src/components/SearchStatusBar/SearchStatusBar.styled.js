import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const NavigationStatusBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding: ${p => p.theme.spacing(2)};

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

export const SearchStatusList = styled.ul`
  display: flex;
  flex-wrap: wrap;
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
  flex-wrap: wrap;
`

export const TrendBox = styled.button`
  ${device.mobileM} {
    margin-left: ${p => p.theme.spacing(5)};
  }
`

