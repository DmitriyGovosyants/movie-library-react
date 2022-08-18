import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;

  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: scroll;
  z-index: 1200;
  animation-name: backdrop;
  animation-duration: 300ms;
  animation-timing-function: ease;

  @keyframes backdrop {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  ${device.desktopM} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ModalContent = styled.div`

`