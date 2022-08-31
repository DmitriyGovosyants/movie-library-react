import { FiChevronsRight } from 'react-icons/fi';
import {
  PaginationArrow,
  SearchForm,
  GenresFilter,
  ButtonRadioSort,
  MovieQuotes,
} from 'components';
import { ControlBox, SortBox, OptionBox, BreadcrumbsBox } from 'layout';
import { SortStatus } from 'constants/constants';
import { useTMDBData } from 'context/tmdbDataContext';
import { SearchBox } from './HomeControlBar.styled';

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

  const handleSortStatus = value => {
    setSearch('');
    setPage(1);
    setSortStatus(value);
  };

  return (
    <>
      <ControlBox>
        <PaginationArrow page={page} totalPage={totalPage} setPage={setPage} />

        <BreadcrumbsBox>
          {search ? <span>{search}</span> : <span>{sortStatus}</span>}
          <FiChevronsRight />
          <span>
            {page} / {totalPage}
          </span>
        </BreadcrumbsBox>
        <OptionBox>
          <SortBox>
            <ButtonRadioSort
              sortStatus={sortStatus}
              setSortStatus={handleSortStatus}
              btnStatus={SortStatus.TREND}
            />
            <ButtonRadioSort
              sortStatus={sortStatus}
              setSortStatus={handleSortStatus}
              btnStatus={SortStatus.RATING}
            />
          </SortBox>
          <GenresFilter
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            genresOption={genresList}
          />
        </OptionBox>
      </ControlBox>
      <SearchBox>
        <MovieQuotes />
        <SearchForm setSearch={setSearch} setSortStatus={setSortStatus} />
      </SearchBox>
    </>
  );
};
