import { useEffect, useState } from 'react'
import { darkTheme, lightTheme, Themes } from '../styles'

const useTheme = () => {
  const [theme, setTheme] = useState<Themes>(Themes.LIGHT)
  const getLocalTheme = () => localStorage.getItem('theme')
  const setLocalTheme = (newtheme: Themes) =>
    localStorage.setItem('theme', newtheme)
  useEffect(() => {
    const localTheme = getLocalTheme()
    if (getLocalTheme()) {
      setTheme(localTheme as Themes)
    } else {
      setLocalTheme(Themes.LIGHT)
    }
  }, [])

  useEffect(() => {
    setLocalTheme(theme)
  }, [theme])

  const handleThemeChanges = () => {
    setTheme((prev: typeof theme) =>
      prev === Themes.LIGHT ? Themes.DARK : Themes.LIGHT
    )
  }

  return {
    theme,
    handleThemeChanges,
    themeProps: theme === Themes.LIGHT ? lightTheme : darkTheme,
  }
}

export default useTheme
