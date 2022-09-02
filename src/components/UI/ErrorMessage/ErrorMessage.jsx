import PropTypes from 'prop-types';
import { ErrorBox } from './ErrorMessage.styled';

export const ErrorMessage = ({ children, size }) => {
  return <ErrorBox size={size}>{children}</ErrorBox>;
};

ErrorMessage.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string.isRequired,
};
