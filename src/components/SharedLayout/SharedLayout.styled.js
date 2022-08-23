import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const FooterPressDown = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 180px);

  ${device.mobileM} {
    height: calc(100vh - 120px);
  }
`

export const Main = styled.main`
  flex-grow: 1;
`