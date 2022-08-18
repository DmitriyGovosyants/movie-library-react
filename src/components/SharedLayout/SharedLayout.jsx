import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Navigation,
  IntersectonObserver,
  LoadingScreen,
} from 'components';
import { HeaderBox, FooterWrapper, Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  const [showLoading, setShowLoading] = useState(true);

  const onPageLoad = () => {
    setTimeout(() => {
      setShowLoading(false);
    }, 1000);
  };

  return (
    <>
      {showLoading && <LoadingScreen />}
      <HeaderBox>
        <Container>
          <IntersectonObserver onIntersect={onPageLoad}>
            <Navigation />
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
