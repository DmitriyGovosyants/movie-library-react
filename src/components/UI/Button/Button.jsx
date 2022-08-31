import { Btn } from './Button.styled';

export const Button = ({
  children,
  onClick,
  type = 'button',
  size = 'medium',
  isCheck,
}) => {
  return (
    <Btn type={type} onClick={onClick} size={size} isCheck={isCheck}>
      {children}
    </Btn>
  );
};
