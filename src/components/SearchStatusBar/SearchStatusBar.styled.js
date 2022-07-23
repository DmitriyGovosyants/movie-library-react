import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const SearchStatusBarBox = styled.p`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  color: blue;

  @media ${device.mobileL} {
    font-size: 30px;
  }

  @media ${device.tablet} {
    font-size: 34px;
  }
`