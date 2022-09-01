import { useRef, useEffect } from 'react';
import Select from 'react-select';
import { SortConstants } from 'constants/constants';
import { FilterBox, selectStyles } from './GenresFilter.styled';

export const GenresFilter = ({
  sorting,
  filterStatus,
  setFilterStatus,
  genresOption,
}) => {
  const genreFilterRef = useRef();

  useEffect(() => {
    if (!filterStatus) {
      genreFilterRef.current.clearValue();
      return;
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
        isDisabled={sorting === SortConstants.SEARCH}
      />
    </FilterBox>
  );
};
