import { SortStatus, ViewStatus } from 'constants/constants';
import Select from 'react-select';
import { Button, StatusBox } from 'components';
import {
  BtnBox,
  SortBox,
  SortBtn,
  SortInputIsHidden,
  selectStyles,
  Breadcrumbs,
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
    return [...genres, { value: genre, label: genre }];
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
        {viewStatus}: {libraryMovies?.length}
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
