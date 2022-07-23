import { FiChevronsRight } from 'react-icons/fi';
import { SearchStatusBarBox } from './SearchStatusBar.styled';

export const SearchStatusBar = ({ query, page }) => {
  return (
    <SearchStatusBarBox>
      <FiChevronsRight />
      {query && query}
      {!query && 'Trending movie'}
      <FiChevronsRight />
      {'page - ' + page}
    </SearchStatusBarBox>
  );
};
