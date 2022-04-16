import styled, { css } from 'styled-components'
import { media } from '../../styles'
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  height: 50px;
  align-content: center;
  padding: 0 50px;

  ${media.desktop} {
    padding: 0 20px;
  }
  ${media.tablet} {
    grid-template-columns: 1fr;
  }
`
export const ListWrapper = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(6, auto);
  ${media.tablet} {
    display: none;
  }
`
export const List = styled.div<{ isActive: boolean }>`
  justify-self: center;
  text-transform: capitalize;
  cursor: pointer;
  transition: 0.5s all linear;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  ${({ isActive, theme }) =>
    isActive
      ? css`
          &:after {
            content: '';
            margin-top: 5px;
            border-bottom: 2px solid ${theme.primary};
            width: 100%;
            display: block;
            transition: 0.5s all linear;
          }
        `
      : css`
          &:after {
            content: '';
            margin-top: 5px;
            border-bottom: 2px solid ${theme.bg};
            width: 0px;
            display: block;
            transition: 0.5s all linear;
          }
        `};
`

export const Title = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
`
export const Burger = styled.div`
  display: none;
  svg {
    margin-right: 5px;
  }
  ${media.tablet} {
    display: block;
  }
`
