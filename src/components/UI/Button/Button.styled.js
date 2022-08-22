import styled from "@emotion/styled";

export const BtnStyled = styled.button`
  display: ${p => p.visible ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: ${p => p.size === 'small' ? '8px' : '16px'};

  color: ${p => p.theme.colors.textMain};
  text-transform: uppercase;

  background-color: ${p => p.isCheck ? p => p.theme.colors.checkColor : p => p.theme.colors.btnBg};
  border-radius: 10px;
  transition: background-color ${p => p.theme.animation.cubicBezierAverageSpeed};

  :hover {
    background-color: ${p => p.isCheck ? p.theme.colors.checkColor : p => p.theme.colors.accentColor};
  }
`