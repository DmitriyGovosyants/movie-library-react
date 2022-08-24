import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const MovieListBox= styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${p => p.theme.spacing(10)};
  column-gap: 16.5px;
  row-gap: 18px;

  ${device.tabletM} {
    row-gap: 32px;
  }
`