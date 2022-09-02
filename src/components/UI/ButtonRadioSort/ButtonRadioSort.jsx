import PropTypes from 'prop-types';
import { SortBtn, SortInputIsHidden } from './ButtonRadioSort.styled';

export const ButtonRadioSort = ({ btnStatus, sorting, handleSorting }) => {
  return (
    <SortBtn isCheck={sorting === btnStatus}>
      {btnStatus}
      <SortInputIsHidden
        type="radio"
        checked={sorting === btnStatus}
        name="sortBy"
        value={btnStatus}
        onChange={e => handleSorting(e.target.value)}
      />
    </SortBtn>
  );
};

ButtonRadioSort.propTypes = {
  btnStatus: PropTypes.string.isRequired,
  sorting: PropTypes.string.isRequired,
  handleSorting: PropTypes.func.isRequired,
};
