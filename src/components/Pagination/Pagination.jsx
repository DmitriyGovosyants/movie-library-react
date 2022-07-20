import { PaginationBox, Btn, Dots } from './Pagination.styled';

export const Pagination = ({ setPage, page, totalPage }) => {
  const changePage = (start, middle, end) => {
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

  return (
    <PaginationBox>
      <Btn onClick={() => setPage(1)} type="button" disabled={page === 1}>
        1
      </Btn>
      {page > 3 && <Dots>...</Dots>}
      <Btn
        onClick={() => changePage(2, -1, -3)}
        type="button"
        disabled={page === 2}
      >
        {page <= 3 && 2}
        {page > 3 && page <= totalPage - 3 && page - 1}
        {page > totalPage - 3 && totalPage - 3}
      </Btn>
      <Btn
        onClick={() => changePage(3, 0, -2)}
        type="button"
        disabled={page >= 3 && page <= totalPage - 2}
      >
        {page <= 3 && 3}
        {page > 3 && page <= totalPage - 3 && page}
        {page > totalPage - 3 && totalPage - 2}
      </Btn>
      <Btn
        onClick={() => changePage(4, 1, -1)}
        type="button"
        disabled={page === totalPage - 1}
      >
        {page <= 3 && 4}
        {page > 3 && page <= totalPage - 3 && page + 1}
        {page > totalPage - 3 && totalPage - 1}
      </Btn>
      {page < totalPage - 2 && <Dots>...</Dots>}
      <Btn
        onClick={() => setPage(totalPage)}
        type="button"
        disabled={page === totalPage}
      >
        {totalPage}
      </Btn>
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

{
  /* <button type='button'>2</button>     if(page > 3) page - 1 if(page > lastpage -2 ) lastpage - 3
<button type='button'>3</button>          if(page > 3) page     if(page > lastpage -2 ) lastpage - 2
<button type='button'>4</button>          if(page > 3) page + 1 if(page > lastpage -2 ) lastpage - 1
 */
}
