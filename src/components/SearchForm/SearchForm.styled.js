import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const FormWrapper = styled.div`
  display: flex;
  ${device.mobileOnly} {
    margin-top: ${p => p.theme.spacing(3)};
    margin-bottom: ${p => p.theme.spacing(3)};
  }
` 

export const Form = styled.form`
  position: relative;
  display: flex;
  border-bottom: 0.5px solid gray;
  transition: border-color ${p => p.theme.animation.cubicBezierAverageSpeed};

  :hover {
    border-color: ${p => p.theme.colors.accentColor};
  }
`

export const Input = styled.input`
  height: 40px;
  padding-right: ${p => p.theme.spacing(5)};

  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.textThird};

  background-color: transparent;
  border: none;
  outline: none;

  ::placeholder {
    font-size: ${p => p.theme.fontSizes.medium};
    color: ${p => p.theme.colors.textThird};
    opacity: 0.7;
  }

  ${device.tabletM} {
    min-width: 400px;
  }
`

export const Submit = styled.button`
  position: absolute;
  top: 5px;
  right: 0;
`