import { BtnStyled } from './Button.styled';

export const Button = ({
  children,
  onClick,
  visible = 'false',
  type = 'button',
  size = 'medium',
}) => {
  return (
    <BtnStyled type={type} onClick={onClick} visible={visible} size={size}>
      {children}
    </BtnStyled>
  );
};
