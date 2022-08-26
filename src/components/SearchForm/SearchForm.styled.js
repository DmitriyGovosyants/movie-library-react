import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const FormBox = styled.div`
  display: flex;
  margin-left: auto;
  
  ${device.mobileOnly} {
    width: 100%;
    margin: ${p => p.theme.spacing(3)} 0;
  }
` 

export const Form = styled.form`
  position: relative;
  display: flex;
  width: 100%;
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
    opacity: 0.5;
  }

  ${device.tabletM} {
    min-width: 250px;
  }
  ${device.desktopL} {
    min-width: 350px;
  }
`

export const SubmitBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 0;

  color: ${p => p.theme.colors.btnBg};
  transition: color ${p => p.theme.animation.cubicBezierAverageSpeed};

  :hover {
    color: ${p => p.theme.colors.accentColor};
  }
`