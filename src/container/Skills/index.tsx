import { FC } from 'react'
import * as Styled from './styles'
import { Section } from '../../styles'
import { PageProps } from '../../interface'
const Skills: FC<PageProps> = ({
  handleSectionChange,
  sectionRef,
}: PageProps) => {
  return (
    <Section ref={sectionRef}>
      <h1>Skills</h1>
      <h3>My technical skills</h3>
      <Styled.ContentWrapper>
        <div>
          <h2>Frontend Developer</h2>
          <h4>More than 2 years</h4>
        </div>
        <div>
          <h2>Backend Developer</h2>
          <h4>About 2 months</h4>
        </div>
      </Styled.ContentWrapper>
    </Section>
  )
}

export default Skills
