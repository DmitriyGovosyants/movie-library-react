import { FiChevronsRight } from 'react-icons/fi';
import { PaginationArrow } from 'components';
import {
  NavigationStatusBox,
  SearchStatusList,
  SearchStatusItem,
} from './SearchStatusBar.styled';

export const SearchStatusBar = ({ query, page, totalPage, setPage }) => {
  return (
    <>
      <NavigationStatusBox>
        <SearchStatusList>
          <SearchStatusItem>
            <FiChevronsRight />
            {query && query}
            {!query && 'Trending movie'}
          </SearchStatusItem>
          <SearchStatusItem>
            <FiChevronsRight />
            {'page - ' + page}
          </SearchStatusItem>
        </SearchStatusList>
        <PaginationArrow page={page} totalPage={totalPage} setPage={setPage} />
      </NavigationStatusBox>
    </>
  );
};
