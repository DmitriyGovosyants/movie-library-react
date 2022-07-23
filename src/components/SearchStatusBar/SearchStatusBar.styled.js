import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const SearchStatusBarBox = styled.div`
  display: flex;
  margin-bottom: 10px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  color: blueviolet;

  @media ${device.mobileOnly} {
    flex-direction: column;
  }

  @media ${device.tablet} {
     align-items: flex-end;
  }
`