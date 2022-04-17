import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { firaFont } from '../../styles'
import { blinkAnimation } from '../../styles/animation'

const Text = styled.pre`
  ${firaFont};
  &::after {
    content: '|';
    animation: ${blinkAnimation} 1s infinite;
  }
`
const TypeWriter = ({ content = '', speed = 100 }) => {
  const [displayedContent, setDisplayedContent] = useState<string>('')
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animKey)
          return index
        }
        return index + 1
      })
    }, speed)
  }, [speed, content.length])

  useEffect(() => {
    setDisplayedContent((displayedContent) => displayedContent + content[index])
  }, [index, content])

  return <Text>{displayedContent}</Text>
}

export default TypeWriter
