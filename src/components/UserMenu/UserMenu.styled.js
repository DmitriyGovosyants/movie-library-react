import styled from "@emotion/styled";

export const UserMenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-left: ${p => p.theme.spacing(10)};
  /* margin-left: auto */
`

export const UserName = styled.p`
  color: ${p => p.theme.colors.textMain};
  margin-right: ${p => p.theme.spacing(2)};
`