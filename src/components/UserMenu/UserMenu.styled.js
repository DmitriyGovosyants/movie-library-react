import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const UserMenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-left: auto;
  
  ${device.tabletM} {
    margin-left: ${p => p.theme.spacing(5)};
  }
`

export const UserName = styled.p`
  color: ${p => p.theme.colors.textMain};
  margin-right: ${p => p.theme.spacing(2)};
`