import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const NavigationStatusBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding-top: ${p => p.theme.spacing(2)};
  padding-bottom: ${p => p.theme.spacing(2)};

  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: 500;
  text-transform: uppercase;
  color: ${p => p.theme.colors.textSecond};

  ${device.mobileOnly} {
    flex-direction: column;
  }

  ${device.tabletM} {
    /* justify-content: space-between; */
    align-items: center;
  }
`

export const SearchStatusList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: ${p => p.theme.spacing(4)} 0;
  ${device.tabletM} {
    align-items: flex-end;
    margin-right: auto;
  }
`

export const SearchStatusItem = styled.li`
  display: flex;
  align-items: center;
`

export const TrendBtn = styled.button`
  display: ${p => p.visible ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: 150px;
  margin-right: ${p => p.theme.spacing(5)};
  padding: ${p => p.theme.spacing(2.5)};

  color: ${p => p.theme.colors.textMain};
  background-color: ${p => p.theme.colors.btnBg};
  border-radius: 5px;
  transition: background-color ${p => p.theme.animation.cubicBezier};
  
  ${device.desktopM} {
    :hover {
      background-color: ${p => p.theme.colors.accentColor};
    }
  }
`

