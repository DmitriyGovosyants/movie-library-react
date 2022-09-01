import { FiChevronsRight } from 'react-icons/fi';
import { SortConstants, ViewConstants } from 'constants/constants';
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
  viewing,
  sorting,
  setSearchParams,
  filterStatus,
  setFilterStatus,
  allGenres,
  libraryMovies,
}) => {
  const handleViewing = value => {
    setSearchParams({
      viewing: value,
      sorting,
    });
  };

  const handleSorting = value => {
    setSearchParams({
      viewing,
      sorting: value,
    });
  };

  return (
    <>
      <ControlBox>
        <BtnBox>
          <Button
            onClick={() => handleViewing(ViewConstants.QUEUE)}
            isCheck={viewing === ViewConstants.QUEUE}
          >
            Queue
          </Button>
          <Button
            onClick={() => handleViewing(ViewConstants.WATCHED)}
            isCheck={viewing === ViewConstants.WATCHED}
          >
            Watched
          </Button>
        </BtnBox>

        <OptionBox>
          <SortBox>
            <ButtonRadioSort
              sorting={sorting}
              handleSorting={handleSorting}
              btnStatus={SortConstants.LATEST}
            />
            <ButtonRadioSort
              sorting={sorting}
              handleSorting={handleSorting}
              btnStatus={SortConstants.RATING}
            />
            <ButtonRadioSort
              sorting={sorting}
              handleSorting={handleSorting}
              btnStatus={SortConstants.YEAR}
            />
          </SortBox>
          <GenresFilter
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            genresOption={allGenres}
            sorting={sorting}
          />
        </OptionBox>
      </ControlBox>
      <InfoBox>
        <BreadcrumbsBox>
          {viewing ? <span>{viewing}</span> : <span>choose viewing</span>}
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
