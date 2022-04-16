import styled from 'styled-components'

export const Wrapper = styled.div`
  bottom: 0;
  right: 0;
  margin: 10px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-self: center;
  z-index: 9999;
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
