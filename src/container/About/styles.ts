import styled from 'styled-components'
import { buttonCss } from '../../component/Button'
import { MotionA, MotionDiv } from '../../utils/motion'
import { boxShadow, colors, firaFont, media } from '../../styles'
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 10px auto;
  text-align: center;
  width: 60vw;
  line-height: 2em;

  ${media.custom(1150)} {
    width: 80vw;
  }
`

export const InLineCardWrapper = styled(MotionDiv)`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
  width: 50vw;
  align-self: center;

  ${media.custom(1150)} {
    width: 80vw;
  }
  ${media.tablet} {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: auto 0;
  }
`
export const InlineCard = styled(MotionDiv)`
  background-color: ${colors.primaryLight};
  color: ${colors.primaryDark};
  ${boxShadow};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  cursor: pointer;
  width: 150px;
  min-height: 140px;
  border-radius: 25px;

  ${media.tablet} {
    margin: 20px;
  }
`
export const ExpandedCard = styled(MotionDiv)`
  margin-top: 10px;
  height: 40px;
`

export const CardHeader = styled(MotionDiv)`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  font-size: 30px;
  margin: 10px 0;
`
export const CardSubHeader = styled(MotionDiv)`
  color: ${colors.primaryDark};
  font-style: italic;
  text-transform: capitalize;
  font-size: 14px;
  ${firaFont};
  text-align: center;
`
export const DownloadLink = styled(MotionA)`
  ${buttonCss};
  width: fit-content;
  align-self: center;
  margin: auto;
  margin-top: 20px;
  svg {
    margin-left: 10px;
    width: 20px;
    height: 20px;
  }
`
