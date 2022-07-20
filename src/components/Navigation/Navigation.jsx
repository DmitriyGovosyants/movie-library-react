import {
  NavigationBox,
  Logo,
  Title,
  NavList,
  NavItem,
  NavLink,
} from './Navigation.styled';
import { ReactComponent as LogoSVG } from '../../images/header/logo.svg';

export const Navigation = () => {
  return (
    <NavigationBox>
      <Logo href="./">
        <LogoSVG />
        <Title>Filmoteka</Title>
      </Logo>
      <NavList>
        <NavItem>
          <NavLink href="./">home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="./">my library</NavLink>
        </NavItem>
      </NavList>
    </NavigationBox>
  );
};
