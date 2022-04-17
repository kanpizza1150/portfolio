import { keyframes } from 'styled-components'

export const wiggleAnimation = keyframes`
  0%, 7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-15deg);
    }
    20% {
      transform: rotateZ(10deg);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    30% {
      transform: rotateZ(6deg);
    }
    35% {
      transform: rotateZ(-4deg);
    }
    40%, 100% {
      transform: rotateZ(0);
    }
 `

export const blinkAnimation = keyframes`
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }`
