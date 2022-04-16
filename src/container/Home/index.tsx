import { FC } from 'react'
import * as Styled from './styles'
import UserImage from '../../images/IMG_2034-removebg-preview.png'
import { Section } from '../../styles'
import { Sections } from '../../hook/useNavigate'
import { PageProps } from '../../interface'
import TypeWriter from '../../component/TypeWriter'
import Button from '../../component/Button'
const Home: FC<PageProps> = ({
  handleSectionChange,
  sectionRef,
}: PageProps) => {
  return (
    <Section ref={sectionRef}>
      <Styled.ContentWrapper>
        <div>
          <Styled.Greet>Hi, I'm </Styled.Greet>
          <Styled.FirstName>Kanpichcha</Styled.FirstName>
          <Styled.LastName>Nokdam</Styled.LastName>

          <Styled.Position>
            <TypeWriter content={`<> Frontend Developer </>`} />
          </Styled.Position>
          <Button onClick={() => handleSectionChange(Sections.CONTACT_ME)}>
            Contact me →
          </Button>
        </div>
        <Styled.ImageSection>
          <Styled.ProfileImageWrapper>
            <img src={UserImage} alt='kan' />
          </Styled.ProfileImageWrapper>{' '}
        </Styled.ImageSection>
      </Styled.ContentWrapper>
    </Section>
  )
}

export default Home
