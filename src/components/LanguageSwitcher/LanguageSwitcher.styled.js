export const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'white' : 'gray',
    // padding: 18,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  input: (provided) => ({
    ...provided,
    textAlign: 'center',
  }),
  control: () => ({
    textAlign: 'center',
    display: 'flex',
    backgroundColor: 'white',
    width: 150,
    // padding: 5,
    
    border: '1px solid gray',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
}