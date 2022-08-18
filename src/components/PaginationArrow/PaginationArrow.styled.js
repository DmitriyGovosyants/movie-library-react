import styled from '@emotion/styled';
import { device } from 'utils/mediaquery';

export const ArrowBox = styled.div`
  display: flex;
  padding: ${p => p.theme.spacing(2)} 0;
`

export const ArrowBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  margin-right: ${p => p.margin ? p.margin : '10px'};
  padding: 0 ${p => p.theme.spacing(2)};

  color: ${p => p.theme.colors.textMain};
  background-color: ${p => p.theme.colors.bgThird};
  border-radius: 5px;
  transition: background-color ${p => p.theme.animation.cubicBezier};
  
  :disabled {
    opacity: 0.5;
  }
  
  ${device.desktopM} {
    :hover {
      background-color: ${p => p.theme.colors.accentColor};
    }
  }
`