import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Header,
  IntersectonObserver,
  LoadingScreen,
  Spinner,
  useUser,
} from 'components';
import { FooterWrapper, Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  // const [showLoading, setShowLoading] = useState(true);
  const { isRefreshing } = useUser();
  // console.log(isRefreshing);

  // const onPageLoad = () => {
  //   setTimeout(() => {
  //     setShowLoading(false);
  //   }, 0);
  // };

  return (
    <>
      {isRefreshing && <Spinner />}
      {!isRefreshing && (
        <>
          {/* {showLoading && <LoadingScreen />} */}
          {/* <IntersectonObserver onIntersect={onPageLoad}> */}
          <Header />
          {/* </IntersectonObserver> */}
          <FooterWrapper>
            <Main>
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </Main>
            <footer>---Footer text---</footer>
          </FooterWrapper>
        </>
      )}
    </>
  );
};
