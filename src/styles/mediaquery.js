export const size = {
  mobileM: '480px',
  tabletM: '768px',
  desktopM: '1024px',
  desktopL: '1440px',
}

export const device = {
  mobileM: `@media screen and (min-width: ${size.mobileM})`,
  tabletM: `@media screen and (min-width: ${size.tabletM})`,
  desktopM: `@media screen and (min-width: ${size.desktopM})`,
  desktopL: `@media screen and (min-width: ${size.desktopL})`,

  mobileBelowM: `@media screen and (max-width: 479.99px)`,
  mobileOnly: `@media screen and (max-width: 767.99px)`,
  tabletOnly: `@media screen and (min-width: ${size.tabletM}) and (max-width: 1023.99px)`,
  notDesktop: `@media screen and (max-width: 1023.99px)`,
}