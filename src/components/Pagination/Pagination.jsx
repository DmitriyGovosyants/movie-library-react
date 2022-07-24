import { PaginationArrow } from 'components';
import { PaginationBox, BtnBox, Btn, Dots } from './Pagination.styled';

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

  const showLeftDots = page > 3 && totalPage > 5;
  const showRightDots = page < totalPage - 2 && totalPage > 5;

  return (
    <PaginationBox>
      <BtnBox>
        {totalPage !== 1 && (
          <Btn onClick={() => setPage(1)} type="button" disabled={page === 1}>
            1
          </Btn>
        )}
        {showLeftDots && <Dots>...</Dots>}
        {totalPage >= 2 && (
          <Btn
            onClick={() => handlePage(2, -1, -3)}
            type="button"
            disabled={page === 2}
          >
            {handleBtnName(2, -1, -3)}
          </Btn>
        )}
        {totalPage >= 3 && (
          <Btn
            onClick={() => handlePage(3, 0, -2)}
            type="button"
            disabled={page >= 3 && (page <= totalPage - 2 || totalPage === 3)}
          >
            {handleBtnName(3, 0, -2)}
          </Btn>
        )}
        {totalPage >= 4 && (
          <Btn
            onClick={() => handlePage(4, 1, -1)}
            type="button"
            disabled={page === totalPage - 1}
          >
            {handleBtnName(4, 1, -1)}
          </Btn>
        )}
        {showRightDots && <Dots>...</Dots>}
        {totalPage >= 5 && (
          <Btn
            onClick={() => setPage(totalPage)}
            type="button"
            disabled={page === totalPage}
          >
            {totalPage}
          </Btn>
        )}
      </BtnBox>
      <PaginationArrow setPage={setPage} page={page} totalPage={totalPage} />
    </PaginationBox>
  );
};
