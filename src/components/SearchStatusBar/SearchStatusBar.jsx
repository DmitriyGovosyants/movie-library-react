import { FiChevronsRight } from 'react-icons/fi';
import { SearchStatusBarBox } from './SearchStatusBar.styled';

export const SearchStatusBar = ({ query }) => {
  return (
    <SearchStatusBarBox>
      <FiChevronsRight />
      {query && query}
      {!query && 'Trending movie'}
    </SearchStatusBarBox>
  );
};
