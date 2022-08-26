import {
  HeaderBox,
  FlexContainer,
  NavigationBox,
  LogoLink,
  Title,
  NavList,
  NavItem,
  ActiveLink,
} from './Header.styled';
import { ReactComponent as Logo } from '../../data/images/header/logo.svg';
import { Container, UserMenu } from 'components';
import { useUser } from 'hooks/userContext';

export const Header = () => {
  const { user } = useUser();

  return (
    <HeaderBox>
      <Container>
        <FlexContainer>
          <NavigationBox>
            <LogoLink to="/">
              <Logo />
              <Title>Filmoteka</Title>
            </LogoLink>
            <NavList>
              <NavItem>
                <ActiveLink to="/">home</ActiveLink>
              </NavItem>
              {!user && (
                <>
                  <NavItem>
                    <ActiveLink to="/signin">sign in</ActiveLink>
                  </NavItem>
                  <NavItem>
                    <ActiveLink to="/login">log in</ActiveLink>
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
          {user && <UserMenu user={user} />}
        </FlexContainer>
      </Container>
    </HeaderBox>
  );
};
