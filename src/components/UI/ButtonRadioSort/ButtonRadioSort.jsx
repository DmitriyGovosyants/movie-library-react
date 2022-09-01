import { SortBtn, SortInputIsHidden } from './ButtonRadioSort.styled';

export const ButtonRadioSort = ({ sorting, handleSorting, btnStatus }) => {
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
