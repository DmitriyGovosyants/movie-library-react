import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: ${p => p.theme.spacing(3)};
`

export const Breadcrumbs = styled.p`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.spacing(4)} 0;
  column-gap: ${p => p.theme.spacing(2)};
  color: ${p => p.theme.colors.textLinkColor};

  ${device.tabletM} {
    padding: ${p => p.theme.spacing(4)};
  }
`

export const FormElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  justify-content: center;
  ${device.mobileOnly} {
    width: 100%;
  }
  ${device.tabletOnly} {
    width: 100%;
  }
`

export const SortBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${p => p.theme.spacing(3)};
  padding: ${p => p.theme.spacing(2)} 0;
`

export const SortBtn = styled.label`
  padding: ${p => p.theme.spacing(2)};
  
  color: ${p => p.theme.colors.textMain};
  text-transform: uppercase;
  
  background-color: ${p => p.isCheck ? p => p.theme.colors.checkColor : p => p.theme.colors.btnBg};
  border-radius: 10px;
  transition: background-color ${p => p.theme.animation.cubicBezierAverageSpeed};
  cursor: pointer;

  :hover {
    background-color: ${p => p.isCheck ? p.theme.colors.checkColor : p => p.theme.colors.accentColor};
  }
  
`

export const SortInputIsHidden = styled.input`
  visibility: hidden;
  width: 0;
`

export const SelectBox = styled.div`
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
    padding: 18,
  }),
  control: () => ({
    display: 'flex',
    width: 250,
    padding: 5,
    border: '1px solid gray',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
}

