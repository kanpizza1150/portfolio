import { FC, useEffect } from 'react'
import * as Styled from './styles'
import UserImage from '../../images/IMG_2034-removebg-preview.png'
import { Sections } from '../../hook/useNavigate'
import { PageProps } from '../../interface'
import TypeWriter from '../../component/TypeWriter'
import Button from '../../component/Button'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  listVerticalVariants,
  listWrapperVariants,
  MotionDiv,
  scaleUpVariants,
} from '../../utils/motion'
const Home: FC<PageProps> = ({
  handleSectionChange,
  sectionRef,
}: PageProps) => {
  const { ref, inView } = useInView()
  const wrapperAnimation = useAnimation()
  const imageAnimation = useAnimation()
  useEffect(() => {
    if (inView) {
      wrapperAnimation.start('visible')
      imageAnimation.start('visible')
    } else {
      wrapperAnimation.start('hidden')
      imageAnimation.start('hidden')
    }
  }, [inView, imageAnimation, wrapperAnimation])

  const positionEle = inView ? (
    <Styled.Position>
      <TypeWriter content={`<> Frontend Developer </>`} />
    </Styled.Position>
  ) : (
    <></>
  )
  const list = [
    <Styled.Greet>Hi, I'm </Styled.Greet>,
    <>
      <Styled.FirstName>Kanpichcha</Styled.FirstName>
      <Styled.LastName>Nokdam</Styled.LastName>
    </>,
    positionEle,
    <Button onClick={() => handleSectionChange(Sections.CONTACT_ME)}>
      Contact me →
    </Button>,
  ]
  return (
    <Styled.SectionWrapper ref={sectionRef}>
      <Styled.ContentWrapper ref={ref}>
        <MotionDiv
          variants={listWrapperVariants}
          animate={wrapperAnimation}
          initial={listWrapperVariants.hidden}
        >
          {list.map((item) => (
            <MotionDiv
              variants={listVerticalVariants}
              initial={listVerticalVariants.hidden}
            >
              {item}
            </MotionDiv>
          ))}
        </MotionDiv>
        <Styled.ImageSection>
          <Styled.ProfileImageWrapper
            animate={imageAnimation}
            variants={scaleUpVariants}
            initial={scaleUpVariants.hidden}
          >
            <img src={UserImage} alt='kan' />
          </Styled.ProfileImageWrapper>
        </Styled.ImageSection>
      </Styled.ContentWrapper>
    </Styled.SectionWrapper>
  )
}

export default Home
