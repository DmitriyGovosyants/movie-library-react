import styled from "@emotion/styled";

export const UserMenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-left: ${p => p.theme.spacing(10)};
`

export const UserName = styled.p`
  color: ${p => p.theme.colors.textMain};
  margin-right: ${p => p.theme.spacing(2)};
`

export const LogoutBtn = styled.button`
  padding: ${p => p.theme.spacing(2)};
  color: ${p => p.theme.colors.textMain};

  background-color: ${p => p.theme.colors.btnBg};
  border-radius: 5px;

  :hover {
    background-color: ${p => p.theme.colors.accentColor};
  }
`