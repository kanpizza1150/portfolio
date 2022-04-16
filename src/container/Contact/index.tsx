import { FC } from 'react'
import { PageProps } from '../../interface'
// import * as Styled from './styles'
import { Section } from '../../styles'
const Contact: FC<PageProps> = ({
  handleSectionChange,
  sectionRef,
}: PageProps) => {
  return (
    <Section ref={sectionRef}>
      <h1>Contact Me</h1>
      <h3>Get in touch</h3>
      <div>
        <div>Call me</div>
        <div>Email</div>
        <div>Location</div>
      </div>
    </Section>
  )
}

export default Contact
