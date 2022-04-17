import styled, { createGlobalStyle, css } from 'styled-components'
import { media } from './media'
import { ThemeType } from './theme'
import { MotionDiv } from '../utils/motion'

export const firaFont = css`
  font-family: 'Fira Code', monospace;
`
export const montserratFont = css`
  font-family: 'Montserrat', sans-serif;
`
export default createGlobalStyle<{ theme: ThemeType }>`${css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    ${montserratFont};
    font-weight: 400;
  }
  #root {
    margin: 0 auto;
  }
  html {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.fg};
  }
  h1 {
    color: ${({ theme }) => theme.primary};
    text-align: center;
    font-weight: 500;
    letter-spacing: 0.1em;
  }
  h2 {
    text-align: center;
  }
  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.fg};
  }
`}
`

export const Container = styled.div`
  display: grid;
  grid-template-rows: ${({ theme }) =>
    `${theme.navHeight} minmax(calc(100vh - ${theme.navHeight}), 100%)`};
`
export const Section = styled(MotionDiv)`
  padding: 20px 100px;
  height: fit-content;

  position: relative;

  ${media.desktop} {
    padding: 20px 80px;
  }
  ${media.tablet} {
    padding: 20px 50px;
  }
  ${media.phone} {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
`
export const SectionWrapper = styled.div`
  overflow: scroll;
  height: ${({ theme }) => `calc(100vh - ${theme.navHeight})`};
`
export const boxShadow = css`
  box-shadow: ${({ theme }) => theme.boxShadow};
`
export const boxShadowHover = css`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.2) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`
