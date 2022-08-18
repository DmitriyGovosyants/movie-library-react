import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const NavigationStatusBox = styled.div`
  display: flex;
  margin-bottom: 10px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  color: cadetblue;

  ${device.mobileOnly} {
    flex-direction: column;
  }

  ${device.tabletM} {
    justify-content: space-between;
    align-items: center;
  }
`

export const SearchStatusList = styled.ul`
  ${device.tabletM} {
    display: flex;
    align-items: flex-end;
  }
`

export const SearchStatusItem = styled.li`
display: flex;
  align-items: center;
`

