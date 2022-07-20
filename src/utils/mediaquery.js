export const size = {
  mobile: '320px',
  mobileOnly: '479px',
  mobileL: '480px',
  tablet: '768px',
  desktop: '1024px'
}

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileOnly: `(max-width: ${size.mobileOnly})`,

  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`
}