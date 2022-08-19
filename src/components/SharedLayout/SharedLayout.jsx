import { Suspense, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'services/firebase/frebaseConfig';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Navigation,
  IntersectonObserver,
  LoadingScreen,
} from 'components';
import { HeaderBox, FooterWrapper, Main } from './SharedLayout.styled';
import { LogIn, SignIn, SignOut } from 'components/Authentication/LogIn';

export const SharedLayout = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [user, setUser] = useState(null);

  const onPageLoad = () => {
    setTimeout(() => {
      setShowLoading(false);
    }, 1000);
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  return (
    <>
      <SignIn />
      <LogIn />
      <SignOut />
      {showLoading && <LoadingScreen />}
      <HeaderBox>
        <Container>
          <IntersectonObserver onIntersect={onPageLoad}>
            <Navigation user={user} />
          </IntersectonObserver>
        </Container>
      </HeaderBox>
      <FooterWrapper>
        <Main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Main>
        <footer>---Footer text---</footer>
      </FooterWrapper>
    </>
  );
};
