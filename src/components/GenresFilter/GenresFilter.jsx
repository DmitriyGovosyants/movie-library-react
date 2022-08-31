import { FilterBox, selectStyles } from './GenresFilter.styled';
import Select from 'react-select';

export const GenresFilter = ({
  filterStatus,
  setFilterStatus,
  genresOption,
}) => {
  const genres = genresOption.reduce((genres, genre) => {
    return [...genres, { value: genre?.id, label: genre?.name }];
  }, []);

  return (
    <FilterBox>
      <Select
        placeholder={'- genre -'}
        defaultValue={filterStatus}
        onChange={setFilterStatus}
        options={genres}
        styles={selectStyles}
        isClearable
      />
    </FilterBox>
  );
};
