import { SortConstants, ViewConstants } from 'constants/constants';
import { FiChevronsRight } from 'react-icons/fi';
import { Button, ButtonRadioSort, GenresFilter, MovieQuotes } from 'components';
import {
  ControlBox,
  SortBox,
  OptionBox,
  BreadcrumbsBox,
  InfoBox,
} from 'layout';
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
    <>
      <ControlBox>
        <BtnBox>
          <Button
            onClick={() => setViewStatus(ViewConstants.QUEUE)}
            isCheck={viewStatus === ViewConstants.QUEUE}
          >
            Queue
          </Button>
          <Button
            onClick={() => setViewStatus(ViewConstants.WATCHED)}
            isCheck={viewStatus === ViewConstants.WATCHED}
          >
            Watched
          </Button>
        </BtnBox>

        <OptionBox>
          <SortBox>
            <ButtonRadioSort
              sortStatus={sortStatus}
              setSortStatus={setSortStatus}
              btnStatus={SortConstants.LATEST}
            />
            <ButtonRadioSort
              sortStatus={sortStatus}
              setSortStatus={setSortStatus}
              btnStatus={SortConstants.RATING}
            />
            <ButtonRadioSort
              sortStatus={sortStatus}
              setSortStatus={setSortStatus}
              btnStatus={SortConstants.YEAR}
            />
          </SortBox>
          <GenresFilter
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            genresOption={allGenres}
          />
        </OptionBox>
      </ControlBox>
      <InfoBox>
        <BreadcrumbsBox>
          <span>{viewStatus}</span>
          {filterStatus && (
            <>
              <FiChevronsRight />
              <span>{filterStatus.label}</span>
            </>
          )}
          <FiChevronsRight />
          <span>{libraryMovies?.length}</span>
        </BreadcrumbsBox>
        <MovieQuotes speed={'30000'} />
      </InfoBox>
    </>
  );
};
