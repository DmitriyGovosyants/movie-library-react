import { Btn } from './Button.styled';

export const Button = ({
  children,
  onClick,
  visible = 'false',
  type = 'button',
  size = 'medium',
  isCheck,
}) => {
  return (
    <Btn
      type={type}
      onClick={onClick}
      visible={visible}
      size={size}
      isCheck={isCheck}
    >
      {children}
    </Btn>
  );
};
