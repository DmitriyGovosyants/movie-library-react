import {
  NavigationBox,
  LogoLink,
  Title,
  NavList,
  NavItem,
  ActiveLink,
} from './Navigation.styled';
import { ReactComponent as LogoSVG } from '../../data/images/header/logo.svg';

export const Navigation = () => {
  return (
    <NavigationBox>
      <LogoLink to="/">
        <LogoSVG />
        <Title>Filmoteka</Title>
      </LogoLink>
      <NavList>
        <NavItem>
          <ActiveLink to="/">home</ActiveLink>
        </NavItem>
        <NavItem>
          <ActiveLink to="/library">my library</ActiveLink>
        </NavItem>
      </NavList>
    </NavigationBox>
  );
};
