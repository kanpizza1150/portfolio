import Logo from '../Logo'
import * as Styled from './style'
const Footer = () => {
  return (
    <Styled.FooterWrapper>
      <Styled.ContentWrapper>
        <Logo />
      </Styled.ContentWrapper>
      <Styled.Copyright>© KANPICHCHA. All rights reserved.</Styled.Copyright>
    </Styled.FooterWrapper>
  )
}

export default Footer
