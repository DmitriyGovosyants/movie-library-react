import styled from "@emotion/styled";
import { device } from "styles/mediaquery";
import languageMenuCursor from '../../data/header/language-menu-cursor.png';

export const LangMenuBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;

  letter-spacing: 0.05em;
  background-color: ${p => p.theme.colors.lowOpacityBg};
  border-bottom-left-radius: 10px;
  
  ${device.mobileM} {
    position: absolute;
    top: 0px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    
    border-bottom-right-radius: 10px;
    cursor: url(${languageMenuCursor}), auto;
  }
`

export const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'white' : 'gray',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  input: (provided) => ({
    ...provided,
    color: 'white',
  }),
  control: () => ({
    display: 'flex',
    backgroundColor: 'transparent',
    width: 160,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const color = 'white';
    const transition = 'opacity 300ms';
    const textTransform = 'uppercase';
    const textAlign = 'center';

    return { ...provided, opacity, transition, color, textTransform, textAlign};
  },
}