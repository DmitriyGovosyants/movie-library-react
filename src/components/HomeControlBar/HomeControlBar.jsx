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
// import { useEffect } from 'react';
// import { useState } from 'react';

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
  // const [isMobile, setIsMobile] = useState(true);

  // useEffect(() => {
  //   if (window.matchMedia('(min-width: 1024px)').matches) {
  //     setIsMobile(false);
  //   } else {
  //     setIsMobile(true);
  //   }
  // }, []);

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
      <MovieQuotes />
      <ControlBox>
        <PaginationArrow page={page} totalPage={totalPage} setPage={setPage} />
        <SearchForm setSearch={setSearch} setSortStatus={setSortStatus} />
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
    </>
  );
};
