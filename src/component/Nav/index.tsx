import { FC } from 'react'
import { Sections } from '../../hook/useNavigate'
import Logo from '../Logo'
import * as Styled from './styles'
interface Props {
  handleSectionChange: (section: Sections) => void
  activeSection?: Sections
}
const Nav: FC<Props> = ({ handleSectionChange, activeSection }: Props) => {
  const renderLinks = () => {
    return (Object.keys(Sections) as Array<keyof typeof Sections>).map(
      (key) => (
        <Styled.List
          key={key}
          isActive={activeSection === Sections[key]}
          onClick={() => handleSectionChange(Sections[key])}
        >
          {Sections[key]}
        </Styled.List>
      )
    )
  }
  return (
    <Styled.Wrapper>
      <Styled.Title>
        <Styled.Burger>
          <svg viewBox='0 0 100 80' width='20' height='20'>
            <rect width='100' height='20'></rect>
            <rect y='30' width='100' height='20'></rect>
            <rect y='60' width='100' height='20'></rect>
          </svg>
        </Styled.Burger>
        <Logo />
      </Styled.Title>
      <Styled.ListWrapper>{renderLinks()}</Styled.ListWrapper>
    </Styled.Wrapper>
  )
}

export default Nav
