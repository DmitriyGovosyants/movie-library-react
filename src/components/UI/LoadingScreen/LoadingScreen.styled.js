import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const LoadOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  

  background-color: rgba(0, 0, 0, 0.95);
  z-index: 1200;

  animation-name: screen;
  animation-duration: 1500ms;
  animation-timing-function: ease;

  @keyframes screen {
    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`

export const LoadText = styled.p`
  font-size: ${p => p.theme.fontSizes.titleMain};
  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${p => p.theme.colors.textMain};

  ${device.desktopM} {
    font-size: ${p => p.theme.fontSizes.loadScreenBig};
  }
`