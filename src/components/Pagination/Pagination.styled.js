import styled from "@emotion/styled";

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme: { spacing } }) => spacing(10)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(10)};
`

export const Btn = styled.button`
  min-width: 50px;
  padding: ${({ theme: { spacing } }) => spacing(2)};
  background-color: red;
  cursor: pointer;

  :disabled {
    background-color: blue;
  }
  :hover {
    background-color: gray;
  }
`

export const Dots = styled.span`
  min-width: 50px;
  text-align: center;
`