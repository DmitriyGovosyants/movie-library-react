import styled from "@emotion/styled";

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: ${p => p.theme.spacing(2.5)};
`
export const ButtonItem = styled.li`
  display: inline-block;
  margin-bottom: 10px;
`