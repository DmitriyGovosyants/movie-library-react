import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useUser } from 'context/userContext';
import { Header, Footer, Spinner } from 'components';
import { FooterPressDown, Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  const { isRefreshing } = useUser();

  return (
    <>
      {isRefreshing && <Spinner />}
      {!isRefreshing && (
        <>
          <Header />
          <FooterPressDown>
            <Main>
              <Suspense fallback={<Spinner />}>
                <Outlet />
              </Suspense>
            </Main>
            <Footer />
          </FooterPressDown>
        </>
      )}
    </>
  );
};
