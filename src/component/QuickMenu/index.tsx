import { FC } from 'react'
import GithubIcon from '../../images/GitHub'
import LinkedInIcon from '../../images/LinkedIn'
import * as Styled from './styles'

const QuickMenu: FC = () => {
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
    </Styled.Wrapper>
  )
}

export default QuickMenu
