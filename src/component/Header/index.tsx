import { FC } from 'react'
import { MotionH1, MotionH3 } from '../../utils/motion'

interface Props {
  header: string
  subHeader: string
}
const Header: FC<Props> = ({ header, subHeader }: Props) => {
  return (
    <>
      <MotionH1>{header}</MotionH1>
      <MotionH3>{subHeader}</MotionH3>
    </>
  )
}

export default Header
