import { ErrorBox } from './ErrorMessage.styled';

export const ErrorMessage = ({ children, size }) => {
  return <ErrorBox size={size}>{children}</ErrorBox>;
};
