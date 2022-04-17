import { FC } from 'react'
import * as Styled from './styles'
import { Section } from '../../styles'
import { PageProps } from '../../interface'
import Header from '../../component/Header'
const Qualification: FC<PageProps> = ({
  handleSectionChange,
  sectionRef,
}: PageProps) => {
  return (
    <Section ref={sectionRef}>
      <Header header='Qualification' subHeader='My personal journey' />

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
