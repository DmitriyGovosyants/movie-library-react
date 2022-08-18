export const theme = Object.freeze({
  colors: {
    textMain: '#ffffff',
    textSecond: 'gray',

    bgMain: '#ffffff',
    bgSecond: '#e0cbcb',
    bgThird: 'gray',

    accentColor: 'red',
    btnBg: '#FF2662',
    btnBgDisabled: 'tomato',

    // ffd: '#c3d1ff',
    // accentTextBtn: '#ff6b01',
  },
  fontSizes: {
    titleMain: '30px',
    small: '14px',
    medium: '18px',
    large: '24px',
  },
  spacing: value => `${4 * value}px`,
  animation: {
    cubicBezier: '250ms cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
