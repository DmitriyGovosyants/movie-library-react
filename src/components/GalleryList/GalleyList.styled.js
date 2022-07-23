import styled from "@emotion/styled";

export const Gallery = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${({ theme: { spacing } }) => spacing(10)};
`