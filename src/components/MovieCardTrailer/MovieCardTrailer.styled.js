import styled from "@emotion/styled";

export const TrailerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${p => p.theme.spacing(2)};
`

export const TotalTrailer = styled.p`
  font-size: ${p => p.theme.fontSizes.large};
`