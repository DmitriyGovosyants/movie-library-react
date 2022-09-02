import PropTypes from 'prop-types';
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
  filterStatus,
  libraryMovies,
  allGenres,
  setSearchParams,
  setFilterStatus,
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
              btnStatus={SortConstants.LATEST}
              sorting={sorting}
              handleSorting={handleSorting}
            />
            <ButtonRadioSort
              btnStatus={SortConstants.RATING}
              sorting={sorting}
              handleSorting={handleSorting}
            />
            <ButtonRadioSort
              btnStatus={SortConstants.YEAR}
              sorting={sorting}
              handleSorting={handleSorting}
            />
          </SortBox>
          <GenresFilter
            sorting={sorting}
            filterStatus={filterStatus}
            genresOption={allGenres}
            setFilterStatus={setFilterStatus}
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
        <MovieQuotes speed={30000} />
      </InfoBox>
    </>
  );
};

LibraryControlBar.propTypes = {
  viewing: PropTypes.string.isRequired,
  sorting: PropTypes.string.isRequired,
  filterStatus: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }),
  libraryMovies: PropTypes.array.isRequired,
  allGenres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  setSearchParams: PropTypes.func.isRequired,
  setFilterStatus: PropTypes.func.isRequired,
};
