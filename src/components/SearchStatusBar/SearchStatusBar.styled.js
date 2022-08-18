import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const NavigationStatusBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;

  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: 500;
  text-transform: uppercase;
  color: ${p => p.theme.colors.textSecond};

  ${device.mobileOnly} {
    flex-direction: column;
  }

  ${device.tabletM} {
    /* justify-content: space-between; */
    align-items: center;
  }
`

export const SearchStatusList = styled.ul`
  ${device.tabletM} {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    margin-right: auto;
  }
`

export const SearchStatusItem = styled.li`
  display: flex;
  align-items: center;
`

