import styled, { css } from 'styled-components'
import { boxShadow } from '../../styles'

export const SwitchWrapper = styled.div<{ isLight: boolean }>`
  border-radius: 50px;
  width: 25px;
  height: 40px;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: 0.5s all ease;
  /* border: 3px solid; */
  cursor: pointer;
  ${boxShadow};
  background-color: ${({ theme }) => theme.fg};

  &::after,
  &::before {
    text-transform: uppercase;
    font-size: 6px;
    color: ${({ theme }) => theme.fg};
  }
  ${({ isLight }) =>
    isLight
      ? css`
          justify-content: flex-start;
          background-color: gold;
          border-color: gold;
          &::after {
            content: 'day';
          }
        `
      : css`
          justify-content: flex-end;
          background-color: rgba(256, 256, 256, 0.3);
          &::before {
            content: 'night';
          }
        `}
  transform: scale(0.8);
`
export const SwitchIndicator = styled.div<{ isLight: boolean }>`
  border-radius: 50%;
  width: 23px;
  height: 23px;
  transition: 0.5s all ease;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 0;

  &::after {
    color: ${({ theme }) => theme.fg};
  }
  ${({ isLight }) =>
    isLight
      ? css`
          background-color: lightyellow;
          &::after {
            content: '☀';
            color: gold;
          }
        `
      : css`
          transform: translateY(0);
          background-color: rgba(256, 256, 256, 1);
          &::after {
            content: '☽';
            color: darkblue;
          }
        `};
`
