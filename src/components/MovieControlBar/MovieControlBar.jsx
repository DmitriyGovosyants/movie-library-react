import { FiChevronsRight } from 'react-icons/fi';
import { PaginationArrow, SearchForm, Button, StatusBox } from 'components';
import {
  SearchStatusList,
  SearchStatusItem,
  BtnBox,
  TrendBox,
} from './MovieControlBar.styled';

export const MovieControlBar = ({
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
    <StatusBox>
      <BtnBox>
        <TrendBox>
          <Button visible={search} onClick={handleGoToTrend}>
            GO TO TREND
          </Button>
        </TrendBox>
        <PaginationArrow page={page} totalPage={totalPage} setPage={setPage} />
      </BtnBox>

      <SearchStatusList>
        <SearchStatusItem>
          {search && <p>{search}</p>}
          {!search && <p>Trending movie</p>}
        </SearchStatusItem>
        <SearchStatusItem>
          <FiChevronsRight />
          <p>
            pages: {page} / {totalPage}
          </p>
        </SearchStatusItem>
      </SearchStatusList>

      <SearchForm setSearch={setSearch} />
    </StatusBox>
  );
};
