import { Container, Navigation, SearchForm } from 'components';
import { HeaderBox } from './Header.styled';

export const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <Navigation />
        <SearchForm />
      </Container>
    </HeaderBox>
  );
};
