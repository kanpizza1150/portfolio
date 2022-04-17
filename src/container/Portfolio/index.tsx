import { FC } from 'react'
import Header from '../../component/Header'
import { PageProps } from '../../interface'
// import * as Styled from './styles'
import { Section } from '../../styles'
const Portfolio: FC<PageProps> = ({
  handleSectionChange,
  sectionRef,
}: PageProps) => {
  return (
    <Section ref={sectionRef}>
      <Header header='Portfolio' subHeader='Most recent work' />

      <div>Slider show</div>
    </Section>
  )
}

export default Portfolio
