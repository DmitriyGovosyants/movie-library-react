import { createPortal } from 'react-dom';
import { LoadOverlay, LoadText } from './LoadingScreen.styled';

const screenRoot = document.querySelector('#screen-root');

export const LoadingScreen = () => {
  return createPortal(
    <LoadOverlay>
      <LoadText>Welcom to movie library react app!</LoadText>
    </LoadOverlay>,
    screenRoot
  );
};
