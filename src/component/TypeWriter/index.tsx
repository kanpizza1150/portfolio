import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Text = styled.pre`
  font-family: 'Fira Code', monospace;
  @keyframes blink {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
  &::after {
    content: '|';
    animation: blink 1s infinite;
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
