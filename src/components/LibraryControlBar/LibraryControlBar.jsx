import { SortStatus, ViewStatus } from 'constants/constants';
import { FiChevronsRight } from 'react-icons/fi';
import { Button, ButtonRadioSort, GenresFilter } from 'components';
import { ControlBox, SortBox, OptionBox, BreadcrumbsBox } from 'layout';
import { BtnBox } from './LibraryControlBar.styled';

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
  return (
    <ControlBox>
      <BtnBox>
        <Button
          onClick={() => setViewStatus(ViewStatus.QUEUE)}
          isCheck={viewStatus === ViewStatus.QUEUE}
        >
          Queue
        </Button>
        <Button
          onClick={() => setViewStatus(ViewStatus.WATCHED)}
          isCheck={viewStatus === ViewStatus.WATCHED}
        >
          Watched
        </Button>
      </BtnBox>
      <BreadcrumbsBox>
        <span>{viewStatus}</span>
        <FiChevronsRight />
        <span>{libraryMovies?.length}</span>
      </BreadcrumbsBox>
      <OptionBox>
        <SortBox>
          <ButtonRadioSort
            sortStatus={sortStatus}
            setSortStatus={setSortStatus}
            btnStatus={SortStatus.LATEST}
          />
          <ButtonRadioSort
            sortStatus={sortStatus}
            setSortStatus={setSortStatus}
            btnStatus={SortStatus.RATING}
          />
          <ButtonRadioSort
            sortStatus={sortStatus}
            setSortStatus={setSortStatus}
            btnStatus={SortStatus.YEAR}
          />
        </SortBox>
        <GenresFilter
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          genresOption={allGenres}
        />
      </OptionBox>
    </ControlBox>
  );
};
