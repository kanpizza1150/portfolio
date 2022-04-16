const commonProps = {
  navHeight: '50px',
}

export const darkTheme = {
  ...commonProps,
  fg: '#ffffff',
  bg: '#101414',
  primary: '#017C67',
}
export const lightTheme = {
  ...commonProps,
  fg: '#101414',
  bg: '#ffffff',
  primary: '#017C67',
}

export type ThemeType = typeof darkTheme
export enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}
