import styled from "@emotion/styled";

export const ErrorBox = styled.div`
  display: flex;
  font-size: 24px;
  justify-content: center;
  padding: ${({ theme: { spacing } }) => spacing(10)} 0;
`