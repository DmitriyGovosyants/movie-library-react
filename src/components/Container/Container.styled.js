import styled from "@emotion/styled";
import { device, size } from "utils/mediaquery";

export const Container = styled.div`
  margin: 0 auto;
  padding-left: ${({theme: {spacing}}) => spacing(5)};
  padding-right: ${({theme: {spacing}}) => spacing(5)};

  ${device.mobileXS} {
    width: ${size.mobileXS};
  }

  ${device.mobileM} {
    width: ${size.mobileM};
  }

  ${device.tabletM} {
    width: ${size.tabletM};
    padding-left: ${({theme: {spacing}}) => spacing(8)};
    padding-right: ${({theme: {spacing}}) => spacing(8)};
  }

  ${device.desktopM} {
    width: ${size.desktopM};
  }

  ${device.desktopL} {
    width: ${size.desktopL};
  }
`


