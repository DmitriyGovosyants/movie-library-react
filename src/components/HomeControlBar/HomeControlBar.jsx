import { FiChevronsRight } from 'react-icons/fi';
import {
  PaginationArrow,
  SearchForm,
  GenresFilter,
  ButtonRadioSort,
  MovieQuotes,
} from 'components';
import {
  ControlBox,
  SortBox,
  OptionBox,
  InfoBox,
  BreadcrumbsBox,
} from 'layout';
import { SortConstants } from 'constants/constants';
import { useTMDBData } from 'context/tmdbDataContext';

export const HomeControlBar = ({
  sorting,
  setSearchParams,
  filterStatus,
  setFilterStatus,
  search,
  setSearch,
  page,
  setPage,
  totalPage,
}) => {
  const { genresList } = useTMDBData();

  const handleSorting = value => {
    setSearch('');
    setPage(1);
    setSearchParams({ sorting: value });
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
      <ControlBox>
        <PaginationArrow page={page} totalPage={totalPage} setPage={setPage} />
        <SearchForm setSearch={setSearch} />
        <OptionBox>
          <SortBox>
            <ButtonRadioSort
              sorting={sorting}
              handleSorting={handleSorting}
              btnStatus={SortConstants.TREND}
            />
            <ButtonRadioSort
              sorting={sorting}
              handleSorting={handleSorting}
              btnStatus={SortConstants.RATING}
            />
          </SortBox>
          <GenresFilter
            filterStatus={filterStatus}
            setFilterStatus={handleGenreStatus}
            genresOption={genresList}
            sorting={sorting}
          />
        </OptionBox>
      </ControlBox>
      <InfoBox>
        <BreadcrumbsBox>
          {search ? <span>{search}</span> : <span>{sorting}</span>}
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
        <MovieQuotes speed={'30000'} />
      </InfoBox>
    </>
  );
};
