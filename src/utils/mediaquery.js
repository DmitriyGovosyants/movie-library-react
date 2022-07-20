export const size = {
  mobile: '320px',
  mobileOnlyL: '479px',
  mobileL: '480px',
  mobileOnly: '767px',
  tablet: '768px',
  tabletOnly: '1023px',
  desktop: '1024px',
  desktopM: '1440px',
}

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileOnlyL: `(max-width: ${size.mobileOnlyL})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileOnly: `(max-width: ${size.mobileOnly})`,

  tablet: `(min-width: ${size.tablet})`,
  tabletOnly: `(min-width: ${size.tablet}) and (max-width: ${size.tabletOnly})`,

  desktop: `(min-width: ${size.desktop})`,
  desktopM: `(min-width: ${size.desktopM})`,
}