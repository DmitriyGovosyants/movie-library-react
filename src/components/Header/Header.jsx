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

export const Header = () => {
  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);

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
                    <ActiveLink to="/library">library</ActiveLink>
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
