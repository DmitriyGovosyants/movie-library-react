export const theme = Object.freeze({
  colors: {
    textMain: '#ffffff',
    textSecond: 'gray',
    textThird: 'black',
    textFourth: '#cecbcb',
    textLinkColor: '#382661',

    bgMain: '#ffffff',
    bgSecond: '#e0cbcb',
    bgThird: 'gray',

    accentColor: 'red',
    checkColor: '#9452A5',
    btnBg: '#FF2662',
    btnBgDisabled: 'tomato',
  },
  fontSizes: {
    titleMain: '30px',
    titleBig: '40px',
    small: '14px',
    medium: '18px',
    large: '24px',
    loadScreenBig: '50px',
  },
  spacing: value => `${4 * value}px`,
  animation: {
    cubicBezierAverageSpeed: '250ms cubic-bezier(0.7, 0.98, 0.86, 0.98)',
    cubicBezierMaxSpeed: '400ms cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
