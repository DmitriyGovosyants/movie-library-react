import styled from "@emotion/styled";

export const ErrorBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${p => p.size === 'small' ? '14px' : '40px'};
  /* padding: ${p => p.theme.spacing(10)} 0; */

  font-size: ${p => p.theme.fontSizes.large};
`