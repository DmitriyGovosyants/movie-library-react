import styled from "@emotion/styled";

export const Gallery = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: ${({ theme: { spacing } }) => spacing(10)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(10)};
`

export const SearchStatusBar = styled.p`
  display: inline-block;
  margin: 0 auto;

  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 40px;
  line-height: 1.5;

  background-color: gray;
`