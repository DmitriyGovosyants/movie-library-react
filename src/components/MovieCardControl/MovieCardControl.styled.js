import styled from "@emotion/styled";

export const ButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const ButtonItem = styled.li`
  display: inline-block;
  margin-bottom: 10px;

  :not(:last-child) {
    margin-right: 10px;
  }
`