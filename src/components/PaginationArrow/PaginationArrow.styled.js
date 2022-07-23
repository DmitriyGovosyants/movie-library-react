import styled from '@emotion/styled';

export const ArrowBox = styled.div`
  display: flex;
  padding: ${({ theme: { spacing } }) => spacing(2)};

  /* margin-bottom: 40px; */
`

export const ArrowBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  margin-right: ${p => p.margin ? p.margin : '10px'};
  padding: ${({ theme: { spacing } }) => spacing(2)};

  color: white;
  background-color: cadetblue;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: red;
  }
`