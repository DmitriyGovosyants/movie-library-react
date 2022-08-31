import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const FilterBox = styled.div`
  ${device.tabletM} {
    margin-left: auto;
  }
  ${device.desktopM} {
    margin-left: 15px;
  }
`

export const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'white' : 'gray',
    padding: 15,
    textAlign: 'center',
  }),
  control: () => ({
    display: 'flex',
    backgroundColor: 'white',
    width: 250,
    border: '1px solid gray',
    textAlign: 'center',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const padding = '20';
    const color = 'gray';

    return { ...provided, opacity, transition, padding, color };
  },
}