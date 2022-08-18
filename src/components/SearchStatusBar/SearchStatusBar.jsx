import { FiChevronsRight } from 'react-icons/fi';
import { PaginationArrow, SearchForm } from 'components';
import {
  NavigationStatusBox,
  SearchStatusList,
  SearchStatusItem,
} from './SearchStatusBar.styled';

export const SearchStatusBar = ({
  page,
  totalPage,
  setPage,
  search,
  setSearch,
}) => {
  return (
    <>
      <NavigationStatusBox>
        <SearchStatusList>
          <SearchStatusItem>
            <FiChevronsRight />
            {search && search}
            {!search && 'Trending movie'}
          </SearchStatusItem>
          <SearchStatusItem>
            <FiChevronsRight />
            {'page - ' + page}
          </SearchStatusItem>
        </SearchStatusList>
        <SearchForm setSearch={setSearch} />
        <PaginationArrow page={page} totalPage={totalPage} setPage={setPage} />
      </NavigationStatusBox>
    </>
  );
};
