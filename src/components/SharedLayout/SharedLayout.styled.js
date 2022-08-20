import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px);

  /* ${device.tabletM} {
    height: calc(100vh - 160px);
  } */
`

export const Main = styled.main`
  flex-grow: 1;
`