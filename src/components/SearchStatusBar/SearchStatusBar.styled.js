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

  @media ${device.mobileOnly} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    justify-content: space-between;
    align-items: center;
  }
`

export const SearchStatusList = styled.ul`
  @media ${device.tablet} {
    display: flex;
    align-items: flex-end;
  }
`

export const SearchStatusItem = styled.li`
display: flex;
  align-items: center;
`

