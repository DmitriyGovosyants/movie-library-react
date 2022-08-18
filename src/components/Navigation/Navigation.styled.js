import styled from "@emotion/styled";
import { Link, NavLink } from 'react-router-dom';
import { device } from "utils/mediaquery";

export const NavigationBox = styled.nav`
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${p => p.theme.spacing(10)};
  
  ${device.mobileBelowM} {
    flex-direction: column;
  }
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;

  ${device.mobileBelowM} {
    margin-bottom: ${p => p.theme.spacing(5)};
  }
`

export const Title = styled.h1`
  margin-left: ${p => p.theme.spacing(2.5)};
  font-size: ${p => p.theme.fontSizes.titleMain};
  font-weight: 500;
  color: ${p => p.theme.colors.textMain};
`

export const NavList = styled.ul`
  display: flex;
`

export const NavItem = styled.li`
  :not(:last-child) {
    margin-right: ${p => p.theme.spacing(10)};
  }
`

export const ActiveLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.small};
  line-height: 1.17;
  font-weight: 500;
  color: ${p => p.theme.colors.textMain};
  text-transform: uppercase;

  transition: color ${p => p.theme.animation.cubicBezier};

  :hover,
  &.active {
    color: ${p => p.theme.colors.accentColor};
  }
`