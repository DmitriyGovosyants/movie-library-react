import { SortBtn, SortInputIsHidden } from './ButtonRadioSort.styled';

export const ButtonRadioSort = ({ sortStatus, btnStatus, setSortStatus }) => {
  return (
    <SortBtn isCheck={sortStatus === btnStatus}>
      {btnStatus}
      <SortInputIsHidden
        type="radio"
        checked={sortStatus === btnStatus}
        name="sortBy"
        value={btnStatus}
        onChange={e => setSortStatus(e.target.value)}
      />
    </SortBtn>
  );
};
