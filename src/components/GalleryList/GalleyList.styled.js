import styled from "@emotion/styled";

export const Gallery = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: ${({ theme: { spacing } }) => spacing(10)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(10)};
`