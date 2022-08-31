import { FiChevronsRight } from 'react-icons/fi';
import { PaginationArrow, SearchForm, Button, GenresFilter } from 'components';
import { ControlBox, Breadcrumbs } from 'layout';
import { BtnBox, TrendBox } from './HomeControlBar.styled';
import { SortStatus } from 'constants/constants';
import { useTMDBData } from 'context/tmdbDataContext';

export const HomeControlBar = ({
  sortStatus,
  setSortStatus,
  filterStatus,
  setFilterStatus,
  search,
  setSearch,
  page,
  setPage,
  totalPage,
}) => {
  const { genresList } = useTMDBData();

  const handleGoToTrend = () => {
    setSortStatus(SortStatus.TREND);
    setSearch('');
    setPage(1);
  };
  const handleGoToTopRated = () => {
    setSortStatus(SortStatus.RATING);
    setSearch('');
    setPage(1);
  };

  return (
    <>
      <ControlBox>
        <PaginationArrow page={page} totalPage={totalPage} setPage={setPage} />

        <Breadcrumbs>
          {search ? <span>{search}</span> : <span>{sortStatus}</span>}
          <FiChevronsRight />
          <span>
            {page} / {totalPage}
          </span>
        </Breadcrumbs>
        <BtnBox>
          <TrendBox>
            <Button
              onClick={handleGoToTrend}
              isCheck={sortStatus === SortStatus.TREND}
            >
              Trend
            </Button>
            <Button
              onClick={handleGoToTopRated}
              isCheck={sortStatus === SortStatus.RATING}
            >
              Rating
            </Button>
          </TrendBox>
        </BtnBox>
        <GenresFilter
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          genresOption={genresList}
        />
      </ControlBox>
      <SearchForm setSearch={setSearch} setSortStatus={setSortStatus} />
    </>
  );
};
