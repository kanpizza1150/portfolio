import { FC } from 'react'
import * as Styled from './styles'
import { Section } from '../../styles'
import { PageProps } from '../../interface'
import resume from '../../images/resume.pdf'
const About: FC<PageProps> = ({
  handleSectionChange,
  sectionRef,
}: PageProps) => {
  return (
    <Section ref={sectionRef}>
      <h1>About Me</h1>
      <h3>My introduction</h3>
      <Styled.ContentWrapper>
        <div>pic</div>
        <div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            accusantium, necessitatibus quia asperiores animi corporis
            laboriosam vitae maxime ratione totam illum suscipit enim et aperiam
            natus minima laudantium sint pariatur.
          </div>
          <div>
            <div>
              <div>02+</div>
              <div>years experience</div>
            </div>
            <div>
              <div>03+</div>
              <div>completed projects</div>
            </div>
            <div>
              <div>02</div>
              <div>companies</div>
            </div>
          </div>
          <a href={resume} download='kanpichcha_resume.pdf'>
            Download CV
          </a>
        </div>
      </Styled.ContentWrapper>
    </Section>
  )
}

export default About
