import { FC, useEffect } from 'react'
import * as Styled from './styles'
import UserImage from '../../images/IMG_2034-removebg-preview.png'
import { Section } from '../../styles'
import { Sections } from '../../hook/useNavigate'
import { PageProps } from '../../interface'
import TypeWriter from '../../component/TypeWriter'
import Button from '../../component/Button'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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

  const wrapperVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 1,
      },
    },
  }
  const listVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  const list = [
    <Styled.Greet>Hi, I'm </Styled.Greet>,
    <>
      <Styled.FirstName>Kanpichcha</Styled.FirstName>
      <Styled.LastName>Nokdam</Styled.LastName>
    </>,
    <Styled.Position>
      <TypeWriter content={`<> Frontend Developer </>`} />
    </Styled.Position>,
    <Button onClick={() => handleSectionChange(Sections.CONTACT_ME)}>
      Contact me →
    </Button>,
  ]
  return (
    <Section ref={sectionRef}>
      <Styled.ContentWrapper ref={ref}>
        <motion.div
          variants={wrapperVariants}
          animate={wrapperAnimation}
          initial={wrapperVariants.hidden}
        >
          {list.map((item) => (
            <motion.div variants={listVariants} initial={listVariants.hidden}>
              {item}
            </motion.div>
          ))}
        </motion.div>
        <Styled.ImageSection>
          <Styled.ProfileImageWrapper
            animate={imageAnimation}
            variants={imageVariants}
            initial={imageVariants.hidden}
          >
            <img src={UserImage} alt='kan' />
          </Styled.ProfileImageWrapper>
        </Styled.ImageSection>
      </Styled.ContentWrapper>
    </Section>
  )
}

export default Home
