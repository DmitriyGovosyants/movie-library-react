import { FiChevronsRight } from 'react-icons/fi';
import { PaginationArrow, SearchForm } from 'components';
import {
  NavigationStatusBox,
  SearchStatusList,
  SearchStatusItem,
  TrendBtn,
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
            {search && search}
            {!search && 'Trending movie'}
          </SearchStatusItem>
          <SearchStatusItem>
            <FiChevronsRight />
            {'page - ' + page}
          </SearchStatusItem>
        </SearchStatusList>
        <TrendBtn
          type="button"
          visible={search}
          onClick={() => window.location.reload()}
        >
          GO TO TREND
        </TrendBtn>
        <SearchForm setSearch={setSearch} />
        <PaginationArrow page={page} totalPage={totalPage} setPage={setPage} />
      </NavigationStatusBox>
    </>
  );
};
