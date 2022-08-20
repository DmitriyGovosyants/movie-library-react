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
  const handleGoToTrend = () => {
    setSearch('');
    setPage(1);
  };

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
            <Button size={'small'} visible={search} onClick={handleGoToTrend}>
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
            pages: {page} / {totalPage}
          </SearchStatusItem>
        </SearchStatusList>

        <SearchForm setSearch={setSearch} />
      </NavigationStatusBox>
    </>
  );
};
