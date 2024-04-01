import PropTypes from 'prop-types';
import { FiChevronsRight } from 'react-icons/fi';
import { SortConstants } from 'constants/constants';
import { useTMDBData } from 'context/tmdbDataContext';
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

export const HomeControlBar = ({
  page,
  totalPage,
  sorting,
  filterStatus,
  search,
  setSearchParams,
  setFilterStatus,
  setSearch,
  setPage,
}) => {
  const { genresList } = useTMDBData();

  const handleSorting = value => {
    setSearch('');
    setPage(1);
    setSearchParams({ sorting: value });
  };

  const handleGenreStatus = genre => {
    if (!genre) {
      return setFilterStatus(null);
    }
    setPage(1);
    setFilterStatus(genre);
  };

  return (
    <>
      <ControlBox>
        <PaginationArrow page={page} totalPage={totalPage} setPage={setPage} />
        <SearchForm
          setSearch={setSearch}
          setPage={setPage}
          setSearchParams={setSearchParams}
        />
        <OptionBox>
          <SortBox>
            <ButtonRadioSort
              btnStatus={SortConstants.TREND}
              sorting={sorting}
              handleSorting={handleSorting}
            />
            <ButtonRadioSort
              btnStatus={SortConstants.RATING}
              sorting={sorting}
              handleSorting={handleSorting}
            />
          </SortBox>
          <GenresFilter
            sorting={sorting}
            filterStatus={filterStatus}
            genresOption={genresList}
            setFilterStatus={handleGenreStatus}
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
        <MovieQuotes speed={30000} />
      </InfoBox>
    </>
  );
};

HomeControlBar.propTypes = {
  page: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  sorting: PropTypes.string.isRequired,
  filterStatus: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }),
  search: PropTypes.string,
  setSearchParams: PropTypes.func.isRequired,
  setFilterStatus: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};
