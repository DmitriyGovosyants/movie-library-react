import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, closeModal, fullWidth }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick} fullWidth={fullWidth}>
      {children}
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func,
  children: PropTypes.node.isRequired,
};
