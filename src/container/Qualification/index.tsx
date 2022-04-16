import { FC } from 'react'
import * as Styled from './styles'
import { Section } from '../../styles'
import { PageProps } from '../../interface'
const Qualification: FC<PageProps> = ({
  handleSectionChange,
  sectionRef,
}: PageProps) => {
  return (
    <Section ref={sectionRef}>
      <h1>Qualification</h1>
      <h3>My personal journey</h3>
      <Styled.ContentWrapper>
        <div>
          <h2>Education</h2>
        </div>
        <div>
          <h2>Work</h2>
        </div>
      </Styled.ContentWrapper>
    </Section>
  )
}

export default Qualification
