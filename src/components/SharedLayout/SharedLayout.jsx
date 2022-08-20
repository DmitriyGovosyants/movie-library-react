import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, Spinner, useUser } from 'components';
import { FooterWrapper, Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  const { isRefreshing } = useUser();

  return (
    <>
      {isRefreshing && <Spinner />}
      {!isRefreshing && (
        <>
          {/* <IntersectonObserver onIntersect={onPageLoad}> */}
          <Header />
          {/* </IntersectonObserver> */}
          <FooterWrapper>
            <Main>
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </Main>
            <Footer />
          </FooterWrapper>
        </>
      )}
    </>
  );
};
