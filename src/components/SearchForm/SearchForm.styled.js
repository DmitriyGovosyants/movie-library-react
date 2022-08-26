import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const FormBox = styled.div`
  display: flex;
  margin-left: auto;
  
  ${device.mobileOnly} {
    margin: ${p => p.theme.spacing(3)} 0;
  }
` 

export const Form = styled.form`
  position: relative;
  display: flex;
  width: 100%;

  border: 1px solid ${p => p.theme.colors.bgThird};;
  transition: border-color ${p => p.theme.animation.cubicBezierAverageSpeed};

  :hover {
    border-color: ${p => p.theme.colors.checkColor};
  }
`

export const Input = styled.input`
  height: 46px;
  padding-left: ${p => p.theme.spacing(4)};
  padding-right: ${p => p.theme.spacing(10)};

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

  ${device.tabletM} {
    min-width: 250px;
  }
  ${device.desktopL} {
    min-width: 350px;
    font-size: ${p => p.theme.fontSizes.large};
  }
`

export const SubmitBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 4px;

  color: ${p => p.theme.colors.bgThird};
  transition: color ${p => p.theme.animation.cubicBezierAverageSpeed};

  :hover {
    color: ${p => p.theme.colors.accentColor};
  }
`