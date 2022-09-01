import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { ArrowBox, ArrowBtn } from './PaginationArrow.styled';

export const PaginationArrow = ({ setPage, page, totalPage }) => {
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
