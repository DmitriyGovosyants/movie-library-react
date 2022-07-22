import styled from "@emotion/styled";

export const ErrorBox = styled.div`
  display: flex;
  font-size: 24px;
  justify-content: center;
  width: 100%;
  padding: ${({ theme: { spacing } }) => spacing(10)} 0;
`