import {
  HeaderBox,
  HeaderWrapper,
  NavigationBox,
  LogoLink,
  Title,
  NavList,
  NavItem,
  ActiveLink,
} from './Header.styled';
import { ReactComponent as LogoSVG } from '../../data/images/header/logo.svg';
import { Container, UserMenu, useUser } from 'components';

export const Header = () => {
  const { user } = useUser();

  return (
    <HeaderBox>
      <Container>
        <HeaderWrapper>
          <NavigationBox>
            <LogoLink to="/">
              <LogoSVG />
              <Title>Filmoteka</Title>
            </LogoLink>
            <NavList>
              <NavItem>
                <ActiveLink to="/">home</ActiveLink>
              </NavItem>
              {!user && (
                <>
                  <NavItem>
                    <ActiveLink to="/login">log in</ActiveLink>
                  </NavItem>
                  <NavItem>
                    <ActiveLink to="/signin">sign in</ActiveLink>
                  </NavItem>
                </>
              )}
              {user && (
                <NavItem>
                  <ActiveLink to="/library">my library</ActiveLink>
                </NavItem>
              )}
            </NavList>
          </NavigationBox>
          {user && <UserMenu user={user?.email} />}
        </HeaderWrapper>
      </Container>
    </HeaderBox>
  );
};
