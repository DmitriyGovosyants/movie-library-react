import PropTypes from 'prop-types';
import { IoMdClose } from 'react-icons/io';
import { BtnClose } from './ButtonClose.styled';

export const ButtonClose = ({ onClick }) => {
  return (
    <BtnClose type="button" onClick={onClick}>
      <IoMdClose size={40} />
    </BtnClose>
  );
};

ButtonClose.propTypes = {
  onClick: PropTypes.func,
};
