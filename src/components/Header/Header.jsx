import { Container, Navigation, SearchForm } from 'components';
import { HeaderBox } from './Header.styled';

export const Header = ({ onSearch }) => {
  return (
    <HeaderBox>
      <Container>
        <Navigation />
        <SearchForm onSearch={onSearch} />
      </Container>
    </HeaderBox>
  );
};
