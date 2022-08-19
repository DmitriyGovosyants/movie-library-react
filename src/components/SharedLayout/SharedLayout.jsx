import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, IntersectonObserver, LoadingScreen } from 'components';
import { FooterWrapper, Main } from './SharedLayout.styled';
import { LogIn, SignIn } from 'components/Authentication/LogIn';

export const SharedLayout = () => {
  const [showLoading, setShowLoading] = useState(true);

  const onPageLoad = () => {
    setTimeout(() => {
      setShowLoading(false);
    }, 1000);
  };

  return (
    <>
      <SignIn />
      <LogIn />
      {showLoading && <LoadingScreen />}
      <IntersectonObserver onIntersect={onPageLoad}>
        <Header />
      </IntersectonObserver>
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
