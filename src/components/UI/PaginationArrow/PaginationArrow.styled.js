import styled from '@emotion/styled';

export const ArrowBox = styled.div`
  display: flex;
  padding: ${p => p.theme.spacing(1.5)} 0;
  column-gap: ${p => p.theme.spacing(2.5)} 
`

export const ArrowBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  padding: 0 ${p => p.theme.spacing(2)};

  color: ${p => p.theme.colors.textMain};
  background-color: ${p => p.theme.colors.bgThird};
  border-radius: 5px;
  transition: background-color ${p => p.theme.animation.cubicBezierMaxSpeed};
  
  :disabled {
    opacity: 0.5;
  }
  
  :hover:enabled {
    background-color: ${p => p.theme.colors.accentColor};
  }
`