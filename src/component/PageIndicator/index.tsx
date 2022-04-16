import React, { FC, RefObject } from 'react'
import styled from 'styled-components'
interface Props {
  pageRef: RefObject<HTMLDivElement>
}

const IndicatorPosition = styled.div`
  width: 200px;
  height: 5px;
  background-color: red;
  position: absolute;
  top: 0;
  right: 0;
`
const PageIndicator: FC<Props> = ({ pageRef }: Props) => {
  return <IndicatorPosition ref={pageRef} />
}

export default PageIndicator
