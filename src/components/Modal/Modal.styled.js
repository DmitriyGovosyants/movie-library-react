import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: scroll;
  z-index: 1200;
  animation-name: backdrop;
  animation-duration: 500ms;
  animation-timing-function: ease;

  @keyframes backdrop {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

export const ModalContent = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`