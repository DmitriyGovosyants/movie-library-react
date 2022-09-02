import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({
  children,
  isCheck,
  type = 'button',
  size = 'medium',
  onClick,
}) => {
  return (
    <Btn type={type} onClick={onClick} size={size} isCheck={isCheck}>
      {children}
    </Btn>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  isCheck: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};
