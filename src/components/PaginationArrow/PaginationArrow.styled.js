import styled from '@emotion/styled';
import { device } from 'utils/mediaquery';

export const ArrowBox = styled.div`
  display: flex;
  padding: ${({ theme: { spacing } }) => spacing(2)} 0;

  ${device.mobileOnly} {
    justify-content: space-between;
  }
`

export const ArrowBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  margin-right: ${p => p.margin ? p.margin : '10px'};
  padding: 0 ${({ theme: { spacing } }) => spacing(2)};

  color: white;
  background-color: cadetblue;
  border-radius: 5px;
  
  :disabled {
    opacity: 0.5;
  }
  
  ${device.desktopM} {
    :hover {
      background-color: red;
    }
  }
`