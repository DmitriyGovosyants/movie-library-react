import styled from "@emotion/styled";

export const LoaderContainer = styled.div`
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