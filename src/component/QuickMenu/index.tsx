import { FC } from 'react'
import GithubIcon from '../../images/GitHub'
import LinkedInIcon from '../../images/LinkedIn'
import { Themes } from '../../styles'
import ThemeSwitchButton from '../ThemeSwitchButton'
import * as Styled from './styles'
interface Props {
  theme: Themes
  handleThemeChange: () => void
}
const QuickMenu: FC<Props> = ({ theme, handleThemeChange }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.LinkButton
        href='https://www.linkedin.com/in/kanpichcha-nokdam'
        target='_blank'
      >
        <LinkedInIcon width='25px' height='25px' />
      </Styled.LinkButton>
      <Styled.LinkButton href='https://github.com/kanpizza1150' target='_blank'>
        <GithubIcon width='25px' height='25px' />
      </Styled.LinkButton>
      <ThemeSwitchButton theme={theme} handleThemeChange={handleThemeChange} />
    </Styled.Wrapper>
  )
}

export default QuickMenu
