import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Line = styled.div`
  width: 1px;
  height: 20vh;
  background-color: ${({ theme }) => theme.fg};
  margin: 20px;
  border-radius: 50px;
`
export const LinkButton = styled.a`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 5px 0;
`
