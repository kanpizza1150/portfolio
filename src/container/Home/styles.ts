import styled, { css } from 'styled-components'
import { media, Section } from '../../styles'
import { MotionDiv } from '../../utils/motion'

export const ProfileImageWrapper = styled(MotionDiv)`
  padding: 9px;
  padding-bottom: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007c67;
  width: fit-content;
  border-radius: 70% 30% 53% 47% / 33% 33% 67% 67%;
  height: fit-content;
  img {
    width: 200px;
  }
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-content: center;
  height: 100%;
  ${media.phone} {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    align-items: center;
    height: 65%;
    margin: auto;
  }
`

export const Greet = styled.p`
  font-size: 50px;
  margin-bottom: 20px;
  ${media.tablet} {
    font-size: 30px;
  }
`

const name = css`
  font-size: 100px;
  font-weight: bold;
  line-height: 1em;
  ${media.desktop} {
    font-size: 50px;
  }
  ${media.tablet} {
    font-size: 40px;
  }
`

export const FirstName = styled.p`
  ${name};
  color: ${({ theme }) => theme.primary};
`
export const LastName = styled.p`
  ${name};
`
export const Position = styled.div`
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  ${media.tablet} {
    font-size: 20px;
  }
`

export const ImageSection = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
`

export const SectionWrapper = styled(Section)`
  height: ${({ theme }) => `calc(100vh - ${theme.navHeight})`};
`
