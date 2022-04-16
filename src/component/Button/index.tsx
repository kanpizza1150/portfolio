import { FC } from 'react'
import styled from 'styled-components'
import { boxShadow, boxShadowHover } from '../../styles'
const ButtonStyled = styled.button`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.primary};
  padding: 10px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  transition: 0.5s all ease;
  ${boxShadow};
  &:hover {
    ${boxShadowHover};
    transform: scale(1.05);
  }
`
interface Props {
  children: any
  onClick?: () => void
  className?: string
}
const Button: FC<Props> = ({ children, onClick, className }: Props) => {
  return (
    <ButtonStyled onClick={onClick} className={className}>
      {children}
    </ButtonStyled>
  )
}

export default Button
