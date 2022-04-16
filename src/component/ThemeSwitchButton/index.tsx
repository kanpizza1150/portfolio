import { FC } from 'react'
import { Themes } from '../../styles'
import * as Styled from './styles'
interface Props {
  theme: Themes
  handleThemeChange: () => void
}
const ThemeSwitchButton: FC<Props> = ({ theme, handleThemeChange }: Props) => {
  return (
    <>
      <Styled.SwitchWrapper
        onClick={handleThemeChange}
        isLight={theme === Themes.LIGHT}
      >
        <Styled.SwitchIndicator isLight={theme === Themes.LIGHT} />
      </Styled.SwitchWrapper>
    </>
  )
}

export default ThemeSwitchButton
