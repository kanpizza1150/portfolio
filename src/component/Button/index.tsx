import { FC } from 'react'
import styled, { css } from 'styled-components'
import { boxShadow, boxShadowHover, colors } from '../../styles'
import { MotionButton } from '../../utils/motion'
import type { HTMLMotionProps } from 'framer-motion'
export const buttonCss = css`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.primary};
  padding: 10px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s all ease;
  display: flex;
  ${boxShadow};
  &:hover {
    ${boxShadowHover};
    transform: scale(1.05) !important;
  }
`
const ButtonStyled = styled(MotionButton)`
  ${buttonCss}
`

const TextButtonStyled = styled(MotionButton)`
  text-decoration: underline;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s all ease;
  color: ${colors.primaryDark};
  &:hover {
    transform: scale(1.05);
  }
`
interface Props extends HTMLMotionProps<'button'> {
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

export const TextButton: FC<Props> = ({
  children,
  onClick,
  className,
}: Props) => {
  return (
    <TextButtonStyled onClick={onClick} className={className}>
      {children}
    </TextButtonStyled>
  )
}

export default Button
