import { FC, useState } from 'react'
import { MenuLogo, Sections } from '../../hook/useNavigate'
import Logo from '../Logo'
import * as Styled from './styles'
interface Props {
  handleSectionChange: (section: Sections) => void
  activeSection?: Sections
}
const Nav: FC<Props> = ({ handleSectionChange, activeSection }: Props) => {
  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false)
  const renderLinks = () => {
    return (Object.keys(Sections) as Array<keyof typeof Sections>).map(
      (key) => {
        const Logo = MenuLogo[Sections[key]]
        return (
          <Styled.List
            key={key}
            isActive={activeSection === Sections[key]}
            onClick={() => handleSectionChange(Sections[key])}
          >
            <Styled.Icon>
              <Logo />
            </Styled.Icon>
            {Sections[key]}
          </Styled.List>
        )
      }
    )
  }
  return (
    <Styled.Wrapper>
      <Styled.Title>
        <Styled.Overlay isActive={isBurgerActive} />
        <Styled.MenuSlider isActive={isBurgerActive}>
          <Styled.Burger
            isActive={isBurgerActive}
            onClick={() => setIsBurgerActive((prev: boolean) => !prev)}
          >
            <div id='menu' />
            <div id='menu' />
            <div id='menu' />
          </Styled.Burger>
          <Styled.ListWrapperInBurger>
            {renderLinks()}
          </Styled.ListWrapperInBurger>
        </Styled.MenuSlider>

        <div />

        <Logo />
      </Styled.Title>
      <Styled.ListWrapper>{renderLinks()}</Styled.ListWrapper>
    </Styled.Wrapper>
  )
}

export default Nav
