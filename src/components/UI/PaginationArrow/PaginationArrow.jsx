import PropTypes from 'prop-types';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { ArrowBox, ArrowBtn } from './PaginationArrow.styled';

export const PaginationArrow = ({ page, totalPage, setPage }) => {
  return (
    <ArrowBox>
      <ArrowBtn
        onClick={() => setPage(s => s - 1)}
        type="button"
        disabled={page === 1}
      >
        <BiChevronLeft size={38} />
      </ArrowBtn>
      <ArrowBtn
        onClick={() => setPage(s => s + 1)}
        type="button"
        disabled={page === totalPage}
      >
        <BiChevronRight size={38} />
      </ArrowBtn>
    </ArrowBox>
  );
};

PaginationArrow.propTypes = {
  page: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
