import { FiChevronsRight } from 'react-icons/fi';
import { PaginationArrow, SearchForm, Button } from 'components';
import {
  NavigationStatusBox,
  SearchStatusList,
  SearchStatusItem,
  BtnBox,
  TrendBox,
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
        <BtnBox>
          <PaginationArrow
            page={page}
            totalPage={totalPage}
            setPage={setPage}
          />
          <TrendBox>
            <Button visible={search} onClick={() => window.location.reload()}>
              GO TO TREND
            </Button>
          </TrendBox>
        </BtnBox>

        <SearchStatusList>
          <SearchStatusItem>
            {search && search}
            {!search && 'Trending movie'}
          </SearchStatusItem>
          <SearchStatusItem>
            <FiChevronsRight />
            {'page: ' + page}
          </SearchStatusItem>
        </SearchStatusList>

        <SearchForm setSearch={setSearch} />
      </NavigationStatusBox>
    </>
  );
};
