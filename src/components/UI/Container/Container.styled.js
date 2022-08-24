import styled from "@emotion/styled";
import { device, size } from "styles/mediaquery";

export const Container = styled.div`
  margin: 0 auto;
  padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};

  ${device.mobileM} {
    width: ${size.mobileM};
  }
  ${device.tabletM} {
    width: ${size.tabletM};
    padding: 0 ${p => p.theme.spacing(8)};
  }
  ${device.desktopM} {
    width: ${size.desktopM};
  }
  ${device.desktopL} {
    width: ${size.desktopL};
  }
`


