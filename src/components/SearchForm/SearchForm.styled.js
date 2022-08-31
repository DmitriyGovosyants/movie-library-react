import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const Form = styled.form`
  position: relative;
  width: 280px;

  border: 1px solid ${p => p.theme.colors.bgThird};;
  transition: border-color ${p => p.theme.animation.cubicBezierAverageSpeed};

  :hover {
    border-color: ${p => p.theme.colors.checkColor};
  }

  ${device.tabletM} {
    width: 350px;
  }

`

export const Input = styled.input`
  height: 36px;
  padding-left: ${p => p.theme.spacing(4)};
  padding-right: ${p => p.theme.spacing(10)};
  width: 100%;

  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.textThird};
  
  background-color: ${p => p.theme.colors.bgMain};
  border: none;
  outline: none;

  ::placeholder {
    font-size: ${p => p.theme.fontSizes.medium};
    color: ${p => p.theme.colors.textThird};
    opacity: 0.5;
    text-transform: uppercase;
  }

  ${device.desktopL} {
    font-size: ${p => p.theme.fontSizes.large};
  }
`

export const SubmitBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;

  color: ${p => p.theme.colors.bgThird};
  transition: color ${p => p.theme.animation.cubicBezierAverageSpeed};

  :hover {
    color: ${p => p.theme.colors.accentColor};
  }
`