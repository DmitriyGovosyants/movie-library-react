import { SortStatus, ViewStatus } from 'constants/constants';
import { FiChevronsRight } from 'react-icons/fi';
import Select from 'react-select';
import { Button, StatusBox, Breadcrumbs } from 'components';
import {
  BtnBox,
  SortBox,
  SortBtn,
  SortInputIsHidden,
  selectStyles,
  FormElement,
  SelectBox,
} from './LibraryControlBar.styled';

export const LibraryControlBar = ({
  sortStatus,
  setSortStatus,
  filterStatus,
  setFilterStatus,
  viewStatus,
  setViewStatus,
  allGenres,
  libraryMovies,
}) => {
  const genresOption = allGenres.reduce((genres, genre) => {
    return [...genres, { value: genre?.id, label: genre?.name }];
  }, []);

  return (
    <StatusBox>
      <BtnBox>
        <Button
          isCheck={viewStatus === ViewStatus.QUEUE}
          onClick={() => setViewStatus(ViewStatus.QUEUE)}
        >
          Queue
        </Button>
        <Button
          isCheck={viewStatus === ViewStatus.WATCHED}
          onClick={() => setViewStatus(ViewStatus.WATCHED)}
        >
          Watched
        </Button>
      </BtnBox>
      <Breadcrumbs>
        <span>{viewStatus}</span>
        <FiChevronsRight />
        <span>{libraryMovies?.length}</span>
      </Breadcrumbs>
      <FormElement>
        <SortBox>
          <SortBtn isCheck={sortStatus === SortStatus.LATEST}>
            latest
            <SortInputIsHidden
              type="radio"
              checked={sortStatus === SortStatus.LATEST}
              name="sortBy"
              value={SortStatus.LATEST}
              onChange={e => setSortStatus(e.target.value)}
            />
          </SortBtn>
          <SortBtn isCheck={sortStatus === SortStatus.RATING}>
            rating
            <SortInputIsHidden
              type="radio"
              checked={sortStatus === SortStatus.RATING}
              name="sortBy"
              value={SortStatus.RATING}
              onChange={e => setSortStatus(e.target.value)}
            />
          </SortBtn>
          <SortBtn isCheck={sortStatus === SortStatus.YEAR}>
            year
            <SortInputIsHidden
              type="radio"
              checked={sortStatus === SortStatus.YEAR}
              name="sortBy"
              value={SortStatus.YEAR}
              onChange={e => setSortStatus(e.target.value)}
            />
          </SortBtn>
        </SortBox>
        <SelectBox>
          <Select
            placeholder={'- genre -'}
            defaultValue={filterStatus}
            onChange={setFilterStatus}
            options={genresOption}
            styles={selectStyles}
            isClearable
          />
        </SelectBox>
      </FormElement>
    </StatusBox>
  );
};
