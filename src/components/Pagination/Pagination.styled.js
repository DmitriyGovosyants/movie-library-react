import styled from "@emotion/styled";

export const PaginationBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme: { spacing } }) => spacing(10)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(10)};
`

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  margin-right: ${({ theme: { spacing } }) => spacing(2)};
  padding: ${({ theme: { spacing } }) => spacing(2)};
  
  color: white;
  background-color: gray;
  border-radius: 5px;
  cursor: pointer;

  :disabled {
    background-color: tomato;
  }
  :hover {
    background-color: red;
  }
`

export const Dots = styled.span`
  margin-right: ${({ theme: { spacing } }) => spacing(2)};
  min-width: 50px;

  letter-spacing: 0.2em;
  text-align: center;
`