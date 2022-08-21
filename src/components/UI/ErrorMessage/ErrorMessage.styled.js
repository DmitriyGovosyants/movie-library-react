import styled from "@emotion/styled";

export const ErrorBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${p => p.size === 'small' ? '8px' : '40px'};
  color: ${p => p.theme.colors.accentColor};

  font-size: ${p => p.size === 'small' ? '18px' : '30px'};
`