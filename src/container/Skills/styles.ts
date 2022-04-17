import styled, { css } from 'styled-components'
import { boxShadow, colors, firaFont, media } from '../../styles'
import { MotionDiv } from '../../utils/motion'

export const ContentWrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'default1 default2 default3'
    'main main main'; */
  transition: 0.3s all ease;
  display: flex;
  justify-content: center;
  transition: 0.3s all ease;

  ${media.tablet} {
    display: flex;
    flex-direction: column;
  }
`

export const SkillBox = styled(MotionDiv)<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  ${boxShadow};
  background-color: ${colors.primaryLight};
  color: ${colors.primaryDark};
  transition: 0.3s all ease;
  height: ${({ isOpen }) => (isOpen ? '500px' : '65px')};
  min-width: 310px;
  /* &:first-child {
    grid-area: ${({ isOpen }) => (isOpen ? 'main' : 'default1')};
  }
  &:nth-child(2) {
    grid-area: ${({ isOpen }) => (isOpen ? 'main' : 'default2')};
  }
  &:last-child {
    grid-area: ${({ isOpen }) => (isOpen ? 'main' : 'default3')};
  } */
`

export const SkillHeaderWrapper = styled(MotionDiv)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SkillHeaderWrapperInner = styled(MotionDiv)`
  display: flex;
  align-items: center;
`

export const SkillHeader = styled(MotionDiv)`
  display: flex;
  flex-direction: column;
  margin: auto 10px;
  h2 {
    font-weight: bold;
    font-size: 18px;
    text-align: start;
  }
  h4 {
    font-size: 15px;
    ${firaFont};
  }
`
export const SkillIcon = styled(MotionDiv)`
  width: 30px;
  color: ${colors.primary};
`
export const ExpandIcon = styled(MotionDiv)<{ isOpen: boolean }>`
  width: 30px;
  color: ${colors.primary};
  transition: 0.3s all ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: rotate(0deg);
        `
      : css`
          transform: rotate(180deg);
        `}
`
