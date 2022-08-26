import { FiChevronsRight } from 'react-icons/fi';
import { PaginationArrow, SearchForm, Button, StatusBox } from 'components';
import { BtnBox, TrendBox, Breadcrumbs } from './MovieControlBar.styled';

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

      <Breadcrumbs>
        {search ? <span>{search}</span> : <span>Trending movie</span>}
        <FiChevronsRight />
        <span>
          {page} / {totalPage}
        </span>
      </Breadcrumbs>

      <SearchForm setSearch={setSearch} />
    </StatusBox>
  );
};
