import styled, { css } from 'styled-components'
import { media } from '../../styles'
import hexToRgba from 'hex-to-rgba'
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
  width: 20px;
  height: 20px;
  margin-right: 10px;
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
    /* color: ${({ theme }) => theme.fg}; */
    height: 40px;
    /* margin: 5px 0; */
    padding: 5px 5px 5px 20px;
    /* border-radius: 20px 0 0 20px; */
    display: flex;
    align-items: center;
    width: 100%;
    &:hover {
      color: ${({ theme }) => theme.fg};
      background-color: ${({ theme }) => theme.primary};
    }
    ${({ isActive, theme }) =>
      isActive
        ? css`
            color: ${({ theme }) => theme.fg};
            background-color: ${({ theme }) => theme.primary};

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
  transition: 0.3s ease all;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  height: 100vh;
  border-radius: 0 20px 20px 0;

  ${({ isActive }) =>
    isActive
      ? css`
          width: 50vw;
          z-index: 999;
          background-color: ${({ theme }) => hexToRgba(theme.fg, 0.5)};
          backdrop-filter: saturate(180%) blur(10px);
          ${ListWrapperInBurger} {
            display: flex;
          }
        `
      : css`
          width: 46px;
          ${ListWrapperInBurger} {
            display: none;
          }
        `}
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

export const ListWrapperInBurger = styled.div`
  flex-direction: column;
`
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
