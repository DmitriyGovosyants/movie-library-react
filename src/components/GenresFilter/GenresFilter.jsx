import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import Select from 'react-select';
import { SortConstants } from 'constants/constants';
import { FilterBox, GenresSelect } from './GenresFilter.styled';

export const GenresFilter = ({
  sorting,
  filterStatus,
  genresOption,
  setFilterStatus,
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
        styles={GenresSelect}
        isClearable
        isDisabled={sorting === SortConstants.SEARCH}
      />
    </FilterBox>
  );
};

GenresFilter.propTypes = {
  sorting: PropTypes.string.isRequired,
  filterStatus: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }),
  genresOption: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  setFilterStatus: PropTypes.func.isRequired,
};
