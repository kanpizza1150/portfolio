import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'
import Button from '../../component/Button'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Info = styled.div`
  background-color: ${({ theme }) => hexToRgba(theme.fg, 0.5)};
  backdrop-filter: saturate(180%) blur(10px);
  padding: 20px;
  border-radius: 20px;
  text-align: justify;
`
export const DownLoadButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`
