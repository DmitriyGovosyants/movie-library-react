import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { PaginationBox, Btn, Dots } from './Pagination.styled';

export const Pagination = ({ setPage, page, totalPage }) => {
  const handlePage = (start, middle, end) => {
    if (page <= 3) {
      return setPage(start);
    }

    if (page > 3 && page <= totalPage - 3) {
      return setPage(s => s + middle);
    }

    if (page >= totalPage - 3) {
      return setPage(totalPage + end);
    }
  };

  const handleBtnName = (start, middle, end) => {
    if (page <= 3) {
      return start;
    }

    if (page > 3 && page <= totalPage - 3) {
      return page + middle;
    }

    if (page >= totalPage - 3) {
      return totalPage + end;
    }
  };

  return (
    <PaginationBox>
      {page !== 1 && (
        <Btn onClick={() => setPage(s => s - 1)} type="button">
          <AiOutlineArrowLeft size={26} />
        </Btn>
      )}
      <Btn onClick={() => setPage(1)} type="button" disabled={page === 1}>
        1
      </Btn>
      {page > 3 && <Dots>...</Dots>}
      <Btn
        onClick={() => handlePage(2, -1, -3)}
        type="button"
        disabled={page === 2}
      >
        {handleBtnName(2, -1, -3)}
      </Btn>
      <Btn
        onClick={() => handlePage(3, 0, -2)}
        type="button"
        disabled={page >= 3 && page <= totalPage - 2}
      >
        {handleBtnName(3, 0, -2)}
      </Btn>
      <Btn
        onClick={() => handlePage(4, 1, -1)}
        type="button"
        disabled={page === totalPage - 1}
      >
        {handleBtnName(4, 1, -1)}
      </Btn>
      {page < totalPage - 2 && <Dots>...</Dots>}
      <Btn
        onClick={() => setPage(totalPage)}
        type="button"
        disabled={page === totalPage}
      >
        {totalPage}
      </Btn>
      {page !== totalPage && (
        <Btn onClick={() => setPage(s => s + 1)} type="button">
          <AiOutlineArrowRight size={26} />
        </Btn>
      )}
    </PaginationBox>
  );
};

// disabled={page === 1}
// < -1- 2 3 4 ... 100 >
// < 1 -2- 3 4 ... 100 >
// < 1 2 -3- 4 ... 100 >
// < 1 ... 3 -4- 5 ... 100 > -2 +5
// < 1 ... 4 -5- 6 ... 100 > -3 +6
// < 1 ... 5 -6- 7 ... 100 > -4 +7
// < 1 ... 96 -97- 98 ... 100>
// < 1 ... 97 -98- 99 100>
// < 1 ... 97 98 -99- 100>
// < 1 ... 97 98 99 -100->
