import hexToRgba from 'hex-to-rgba'

const commonProps = {
  navHeight: '50px',
}

export const colors = {
  primaryDark: '#101414',
  primaryLight: '#ffffff',
  primary: '#017C67',
}
export const darkTheme = {
  ...commonProps,
  fg: colors.primaryLight,
  bg: colors.primaryDark,
  primary: colors.primary,
  boxShadow: `${hexToRgba(colors.primaryDark, 0.2)} 0px 12px 28px 11px,
  ${hexToRgba(colors.primaryLight, 0.1)} 0px 2px 24px 0px,
  ${hexToRgba(colors.primaryDark, 0.5)} 0px 0px 0px 1px inset`,
  boxShadowHover: `${hexToRgba(colors.primaryDark, 0.3)} 0px 12px 28px 0px,
  ${hexToRgba(colors.primaryLight, 0.4)} 0px 0px 15px 1px,
  ${hexToRgba(colors.primaryDark, 0.1)} 0px 0px 0px 1px inset`,
}
export const lightTheme = {
  ...commonProps,
  fg: colors.primaryDark,
  bg: colors.primaryLight,
  primary: colors.primary,
  boxShadow: `${hexToRgba(colors.primaryLight, 0.2)} 0px 12px 28px 11px,
  ${hexToRgba(colors.primaryDark, 0.2)} 0px 2px 24px 0px,
  ${hexToRgba(colors.primaryLight, 0.5)} 0px 0px 0px 1px inset`,
  boxShadowHover: `${hexToRgba(colors.primaryLight, 0.3)} 0px 12px 28px 0px,
  ${hexToRgba(colors.primaryDark, 0.4)} 0px 0px 15px 1px,
  ${hexToRgba(colors.primaryLight, 0.1)} 0px 0px 0px 1px inset`,
}

export type ThemeType = typeof darkTheme
export enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}
