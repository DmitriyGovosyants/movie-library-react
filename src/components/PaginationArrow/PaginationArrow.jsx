import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { ArrowBox, ArrowBtn } from './PaginationArrow.styled';

export const PaginationArrow = ({ setPage, page, totalPage }) => {
  return (
    <ArrowBox>
      {page !== 1 && (
        <ArrowBtn onClick={() => setPage(s => s - 1)} type="button">
          <BiChevronLeft size={38} />
        </ArrowBtn>
      )}
      {page !== totalPage && (
        <ArrowBtn
          onClick={() => setPage(s => s + 1)}
          type="button"
          margin={'0'}
        >
          <BiChevronRight size={38} />
        </ArrowBtn>
      )}
    </ArrowBox>
  );
};
