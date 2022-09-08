import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routesPath } from 'router';
import { ReactComponent as Logo } from '../../data/header/logo.svg';
import { useUser } from 'context/userContext';
import { Modal, Launch, UserMenu, LanguageSwitcher } from 'components';
import { Container } from 'layout';
import {
  HeaderBox,
  FlexContainer,
  NavigationBox,
  LogoBtn,
  Title,
  NavList,
  NavItem,
  ActiveLink,
} from './Header.styled';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [homeLocation, setHomeLocation] = useState('');
  const [libraryLocation, setLibraryLocation] = useState('');
  const { user } = useUser();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setHomeLocation(location.search);
    }
    if (location.pathname === `/${routesPath.library}`) {
      setLibraryLocation(location.search);
    }
  }, [location.pathname, location.search]);

  return (
    <>
      <HeaderBox>
        <Container>
          <FlexContainer>
            <NavigationBox>
              <LogoBtn type="button" onClick={() => setShowModal(true)}>
                <Logo />
                <Title>Movie DB</Title>
              </LogoBtn>
              <NavList>
                <NavItem>
                  <ActiveLink to={`/${homeLocation}`}>home</ActiveLink>
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
                    <ActiveLink to={`/library${libraryLocation}`}>
                      library
                    </ActiveLink>
                  </NavItem>
                )}
              </NavList>
            </NavigationBox>
            <LanguageSwitcher />
            {user && <UserMenu />}
          </FlexContainer>
        </Container>
      </HeaderBox>
      {showModal && (
        <Modal closeModal={setShowModal} fullWidth>
          <Launch closeModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};
