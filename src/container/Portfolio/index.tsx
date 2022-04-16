import { FC } from 'react'
import { PageProps } from '../../interface'
// import * as Styled from './styles'
import { Section } from '../../styles'
const Portfolio: FC<PageProps> = ({
  handleSectionChange,
  sectionRef,
}: PageProps) => {
  return (
    <Section ref={sectionRef}>
      <h1>Portfolio</h1>
      <h3>Most recent work</h3>
      <div>Slider show</div>
    </Section>
  )
}

export default Portfolio
