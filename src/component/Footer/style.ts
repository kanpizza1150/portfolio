import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  height: 30vh;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`
export const Copyright = styled.div`
  text-align: center;
  color: rgba(256, 256, 256, 0.5);
  font-size: 10px;
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
