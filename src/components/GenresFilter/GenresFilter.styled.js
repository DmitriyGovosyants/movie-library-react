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
  container: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  },
  control: () => ({
    display: 'flex',
    backgroundColor: 'white',
    width: 280,
    border: '1px solid gray',
    textAlign: 'center',
  }),
  singleValue: (provided, state) => {
    const padding = '20';
    const color = 'gray';
    return { ...provided, padding, color };
  },
}