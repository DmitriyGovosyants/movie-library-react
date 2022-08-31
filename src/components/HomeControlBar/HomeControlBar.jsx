import { FiChevronsRight } from 'react-icons/fi';
import {
  PaginationArrow,
  SearchForm,
  GenresFilter,
  ButtonRadioSort,
  MovieQuotes,
} from 'components';
import { ControlBox, SortBox, OptionBox, BreadcrumbsBox } from 'layout';
import { SortConstants } from 'constants/constants';
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

  const handleGenreStatus = payload => {
    setPage(1);

    if (!payload) {
      return setFilterStatus(null);
    }

    setFilterStatus(payload);
  };

  return (
    <>
      <BreadcrumbsBox>
        {search ? <span>{search}</span> : <span>{sortStatus}</span>}
        {filterStatus && (
          <>
            <FiChevronsRight />
            <span>{filterStatus.label}</span>
          </>
        )}
        <FiChevronsRight />
        <span>
          {page} / {totalPage}
        </span>
      </BreadcrumbsBox>
      <ControlBox>
        <PaginationArrow page={page} totalPage={totalPage} setPage={setPage} />

        <OptionBox>
          <SortBox>
            <ButtonRadioSort
              sortStatus={sortStatus}
              setSortStatus={handleSortStatus}
              btnStatus={SortConstants.TREND}
            />
            <ButtonRadioSort
              sortStatus={sortStatus}
              setSortStatus={handleSortStatus}
              btnStatus={SortConstants.RATING}
            />
          </SortBox>
          <GenresFilter
            filterStatus={filterStatus}
            setFilterStatus={handleGenreStatus}
            genresOption={genresList}
            sortStatus={sortStatus}
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
