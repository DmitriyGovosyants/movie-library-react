import { FilterBox, selectStyles } from './GenresFilter.styled';
import Select from 'react-select';
import { useRef } from 'react';
import { useEffect } from 'react';
import { SortConstants } from 'constants/constants';

export const GenresFilter = ({
  filterStatus,
  setFilterStatus,
  genresOption,
  sortStatus = null,
}) => {
  const genreFilterRef = useRef();

  useEffect(() => {
    if (!filterStatus) {
      genreFilterRef.current.clearValue();
    }
  }, [filterStatus]);

  const genres = genresOption.reduce((genres, genre) => {
    return [...genres, { value: genre?.id, label: genre?.name }];
  }, []);

  return (
    <FilterBox>
      <Select
        ref={genreFilterRef}
        placeholder={'by genre'}
        defaultValue={filterStatus}
        onChange={setFilterStatus}
        options={genres}
        styles={selectStyles}
        isClearable
        isDisabled={sortStatus === SortConstants.SEARCH}
      />
    </FilterBox>
  );
};
