import styled from "@emotion/styled";
import { device, size } from "utils/mediaquery";

export const Container = styled.div`
  margin: 0 auto;
  padding-left: ${({theme: {spacing}}) => spacing(5)};
  padding-right: ${({theme: {spacing}}) => spacing(5)};

  @media ${device.mobile} {
    width: ${size.mobile};
  }

  @media ${device.mobileL} {
    width: ${size.mobileL};
  }

  @media ${device.tablet} {
    width: ${size.tablet};
    padding-left: ${({theme: {spacing}}) => spacing(8)};
    padding-right: ${({theme: {spacing}}) => spacing(8)};
  }

  @media ${device.desktop} {
    width: ${size.desktop};
  }
`


