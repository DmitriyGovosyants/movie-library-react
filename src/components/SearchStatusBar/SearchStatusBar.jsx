import { FiChevronsRight } from 'react-icons/fi';
import { PaginationArrow, SearchForm } from 'components';
import {
  NavigationStatusBox,
  SearchStatusList,
  SearchStatusItem,
  BtnBox,
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
        <BtnBox>
          <PaginationArrow
            page={page}
            totalPage={totalPage}
            setPage={setPage}
          />
          <TrendBtn
            type="button"
            visible={search}
            onClick={() => window.location.reload()}
          >
            GO TO TREND
          </TrendBtn>
        </BtnBox>

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

        <SearchForm setSearch={setSearch} />
      </NavigationStatusBox>
    </>
  );
};
