import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Form = styled.form`
  position: relative;
  border-bottom: 0.5px solid #ffffff;
  transition: border-color ${p => p.theme.animation.cubicBezier};

  :hover {
    border-color: ${p => p.theme.colors.accentColor};
  }
`

export const Input = styled.input`
  height: 40px;
  padding-right: ${p => p.theme.spacing(5)};

  letter-spacing: 0.03em;
  text-shadow: 2px 2px 4px black;
  color: ${p => p.theme.colors.textMain};

  background-color: transparent;
  border: none;
  outline: none;

  ::placeholder {
    font-size: ${p => p.theme.fontSizes.small};
    color: ${p => p.theme.colors.textMain};
    opacity: 0.7;
  }

  ${device.tabletM} {
    min-width: 400px;
  }
`

export const Submit = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`