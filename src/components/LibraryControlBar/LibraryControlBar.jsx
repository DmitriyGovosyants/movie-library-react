import { SortStatus, ViewStatus } from 'constants/constants';
import Select from 'react-select';
import { Button } from 'components';
import {
  StatusBox,
  BtnBox,
  SortBox,
  SortBtn,
  SortInputIsHidden,
  selectStyles,
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
  // console.log(allGenres);
  const genresOption = allGenres.reduce((genres, genre) => {
    return [...genres, { value: genre, label: genre }];
  }, []);
  // console.log(genresOption);
  console.log(filterStatus);
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
      {viewStatus}: {libraryMovies?.length}
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
        <Select
          defaultValue={filterStatus}
          onChange={setFilterStatus}
          options={genresOption}
          styles={selectStyles}
        />

        {/* <select
          name="genres"
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
        >
          <option value="">CHOOSE GENRE</option>
          {allGenres.map(genre => {
            return (
              <option key={genre} value={genre}>
                {genre}
              </option>
            );
          })}
          <option value=""> - ALL - </option>
        </select> */}
      </SortBox>
    </StatusBox>
  );
};
