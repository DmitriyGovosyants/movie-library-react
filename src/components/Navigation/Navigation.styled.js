import styled from "@emotion/styled";
import { device } from "utils/mediaquery";

export const NavigationBox = styled.nav`
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing(10)};
  
  @media ${device.mobileOnlyL} {
    flex-direction: column;
  }
`

export const Logo = styled.a`
  display: flex;
  align-items: center;

  @media ${device.mobileOnlyL} {
    margin-bottom: ${({ theme: { spacing } }) => spacing(5)};;
  }
`

export const Title = styled.h1`
  margin-left: ${({theme: {spacing}}) => spacing(2.5)};
  font-size: ${({ theme: {fontSizes}}) => fontSizes.titleMain};
  font-weight: 500;
  color: ${({ theme: {colors}}) => colors.textMain};
`

export const NavList = styled.ul`
  display: flex;
`

export const NavItem = styled.li`
  :not(:last-child) {
    margin-right: ${({theme: {spacing}}) => spacing(10)};
  }
`

export const NavLink = styled.a`
  font-size: ${({ theme: {fontSizes}}) => fontSizes.small};
  line-height: 1.17;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.textMain};
  text-transform: uppercase;

  transition: color ${({theme: {animation}})=> animation.cubicBezier};

  :hover {
    color: ${({ theme: {colors}}) => colors.accentTextBtn};
  }
`