import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';
import { device } from "styles/mediaquery";
import mobileBg from '../../data/images/header/header-bg-mobile@1x.jpg';
import tabletBg from '../../data/images/header/header-bg-tablet@1x.jpg';
import desktopBg from '../../data/images/header/header-bg-desktop@1x.jpg';

export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  height: 180px;
  background-repeat: no-repeat;
  background-size: cover;

  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${mobileBg});

  ${device.mobileM} {
    height: 120px;
  }
  
  ${device.tabletM} {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${tabletBg});
  }

  ${device.desktopM} {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${desktopBg});
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const NavigationBox = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  
  ${device.mobileBelowM} {
    flex-direction: column;
  }
`

export const LogoBtn = styled.button`
  display: flex;
  align-items: center;

  ${device.mobileBelowM} {
    margin-bottom: ${p => p.theme.spacing(5)};
  }
`

export const Title = styled.h1`
  margin-left: ${p => p.theme.spacing(2.5)};
  font-size: 10vw;
  font-weight: 500;
  color: ${p => p.theme.colors.textMain};

  ${device.mobileM} {
    font-size: ${p => p.theme.fontSizes.titleMain};
  }

  ${device.desktopM} {
    font-size: ${p => p.theme.fontSizes.titleBig};
  }
`

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  column-gap: ${p => p.theme.spacing(3)};
`

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const ActiveLink = styled(NavLink)`
  padding: ${p => p.theme.spacing(3)};

  font-size: 5vw;
  line-height: 1.17;
  font-weight: 500;
  color: ${p => p.theme.colors.textMain};
  text-transform: uppercase;
  border-radius: 5px;
  background-color: transparent;

  transition: color ${p => p.theme.animation.cubicBezierAverageSpeed};

  :hover,
  &.active {
    color: ${p => p.theme.colors.accentColor};
  }

  ${device.mobileM} {
    font-size: ${p => p.theme.fontSizes.small};
  }

  ${device.tabletM} {
    font-size: ${p => p.theme.fontSizes.medium};
  }
`