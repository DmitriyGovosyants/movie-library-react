import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Navigation,
  SearchForm,
  IntersectonObserver,
} from 'components';
import { HeaderBox, FooterWrapper, Main } from './SharedLayout.styled';

export const SharedLayout = ({ setSearch }) => {
  return (
    <>
      <HeaderBox>
        <Container>
          <Navigation />
          <SearchForm setSearch={setSearch} />
        </Container>
      </HeaderBox>
      <FooterWrapper>
        <Main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Main>
        <IntersectonObserver
          onIntersect={() => console.log('Yes, it`s a footer')}
        >
          ---Footer text---
        </IntersectonObserver>
      </FooterWrapper>
    </>
  );
};
