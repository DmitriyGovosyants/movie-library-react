import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: ${p => p.theme.spacing(2)};
`

export const TrendBox = styled.div`
  display: flex;
  justify-content: center;
`

export const Breadcrumbs = styled.p`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.spacing(4)} 0;
  column-gap: ${p => p.theme.spacing(2)};
  color: ${p => p.theme.colors.textLinkColor};

  ${device.tabletM} {
    padding: ${p => p.theme.spacing(4)};
  }
`
