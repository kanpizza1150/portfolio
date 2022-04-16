import { FC } from 'react'
import { Themes } from '../../styles'
import QuickMenu from '../QuickMenu'
import * as Styled from './styles'
interface Props {
  theme: Themes
  handleThemeChange: () => void
}
const ThemeSwitchButton: FC<Props> = ({ theme, handleThemeChange }: Props) => {
  return (
    <Styled.Wrapper>
      <QuickMenu />
      <Styled.SwitchWrapper
        onClick={handleThemeChange}
        isLight={theme === Themes.LIGHT}
      >
        <Styled.SwitchIndicator isLight={theme === Themes.LIGHT} />
      </Styled.SwitchWrapper>
    </Styled.Wrapper>
  )
}

export default ThemeSwitchButton
