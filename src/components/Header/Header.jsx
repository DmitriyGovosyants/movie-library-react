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
import { ReactComponent as Logo } from '../../data/header/logo.svg';
import { Modal, Launch, UserMenu, LanguageSwitcher } from 'components';
import { Container } from 'layout';
import { useUser } from 'context/userContext';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const Header = () => {
  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [homeLocation, setHomeLocation] = useState('');
  const [libraryLocation, setLibraryLocation] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setHomeLocation(location.search);
    }
    if (location.pathname === '/library') {
      setLibraryLocation(location.search);
    }
  }, [location.pathname, location.search]);
  // console.log('RENDER-/', homeLocation);

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
