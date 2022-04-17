import styled, { css } from 'styled-components'
import { glassmorphism, media } from '../../styles'
import { wiggleAnimation } from '../../styles/animation'
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  height: 50px;
  align-content: center;
  padding: 0 50px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.01) 0px 4px 6px -2px;
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
export const Icon = styled.div`
  display: none;
  ${media.tablet} {
    transition: 0.3s all ease-out;
    display: flex;
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
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

  ${media.tablet} {
    transition: 0.3s all ease;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    height: 100px;
    margin: 10px;
    text-align: center;
    color: ${({ theme }) => theme.bg};

    &:hover {
      color: ${({ theme }) => theme.primary};
      &${Icon} {
        transform: scale(3);
      }
    }
    &:hover ${Icon} {
      transform: scale(1.2);
    }
    ${({ isActive, theme }) =>
      isActive
        ? css`
            color: ${theme.primary};
            font-weight: bold;
            ${Icon} {
              animation: ${wiggleAnimation} 3s infinite;
            }
            &:after {
              display: none;
            }
          `
        : css`
            &:after {
              display: none;
            }
          `};
  }
`

export const Title = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  ${media.desktop} {
    justify-content: space-between;
  }
`

export const MenuSlider = styled.div<{ isActive: boolean }>`
  display: none;
  ${media.tablet} {
    transition: 0.3s ease all;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    width: 100vw;

    ${({ isActive }) =>
      isActive
        ? css`
            height: 300px;
            z-index: 999;
            ${glassmorphism};
            ${ListWrapperInBurger} {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-auto-rows: 100px;
            }
          `
        : css`
            height: 46px;
            ${ListWrapperInBurger} {
              display: none;
            }
          `}
  }
`
export const Overlay = styled.div<{ isActive: boolean }>`
  transition: 0.3s ease all;
  opacity: 0;
  display: none;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 998;
  ${({ isActive }) =>
    isActive &&
    css`
      display: flex;
    `}
`

export const ListWrapperInBurger = styled.div``
export const Burger = styled.div<{ isActive: boolean }>`
  display: none;
  margin: 20px;
  ${media.tablet} {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 26px;
    height: 26px;
    cursor: pointer;
    transition: 0.3s all ease;
  }

  ${({ isActive }) =>
    !isActive
      ? css`
          &:hover #menu {
            &:first-child {
              width: 26px;
            }
            &:nth-child(2) {
              width: 26px;
            }
            &:last-child {
              width: 26px;
            }
          }
        `
      : css`
          align-self: flex-end;
        `}
  #menu {
    width: 3px;
    height: 3px;
    background-color: ${({ theme }) => theme.fg};
    margin-left: 0;
    border-radius: 4px;
    transition: 0.3s all ease;
    &:not(:last-child) {
      margin-bottom: 4px;
    }
    ${({ isActive }) =>
      !isActive
        ? css`
            &:first-child {
              width: 20px;
            }
            &:nth-child(2) {
              width: 14px;
            }
            &:last-child {
              width: 24px;
            }
          `
        : css`
            background-color: ${({ theme }) => theme.bg};
            position: absolute;
            &:first-child {
              width: 20px;
              top: 50%;
              transform: rotate(45deg);
            }
            &:nth-child(2) {
              display: none;
            }
            &:last-child {
              width: 20px;
              top: 50%;
              transform: rotate(-45deg);
            }
          `}
  }
`
