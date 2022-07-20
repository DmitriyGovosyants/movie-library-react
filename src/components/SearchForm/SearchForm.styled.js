import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Form = styled.form`
  position: relative;
  border-bottom: 0.5px solid #ffffff;
  transition: border-color ${({theme: {animation}})=> animation.cubicBezier};

  :hover {
    border-color: ${({ theme: {colors}}) => colors.accentTextBtn};
  }
`

export const Input = styled.input`
  padding-right: ${({theme: {spacing}}) => spacing(5)};

  letter-spacing: 0.1em;
  color: ${({ theme: { colors } }) => colors.textMain};
  text-shadow: 2px 2px 4px black;
  text-align: center;

  background-color: transparent;
  border: none;
  outline: none;

  ::placeholder {
    font-size: ${({ theme: {fontSizes}}) => fontSizes.small};
    color: ${({ theme: { colors } }) => colors.textMain};
    opacity: 0.7;
  }
`

export const Submit = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`