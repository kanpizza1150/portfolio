import { FC, useEffect, useState } from 'react'
import * as Styled from './styles'
import { PageProps } from '../../interface'
import resume from '../../images/resume.pdf'
import { ReactComponent as DownloadIcon } from '../../images/download.svg'
import {
  AnimateSharedLayout,
  AnimatePresence,
  useAnimation,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  listVerticalVariants,
  listWrapperVariants,
  scaleUpVariants,
  MotionH1,
  MotionH3,
} from '../../utils/motion'
import { TextButton } from '../../component/Button'
import { Sections } from '../../hook/useNavigate'
import { Section } from '../../styles'
interface IItem {
  title: string
  subtitle: string
  id?: string
  link?: Sections
  onLinkClick?: () => void
  inView?: boolean
}
const About: FC<PageProps> = ({
  handleSectionChange,
  sectionRef,
}: PageProps) => {
  const { ref, inView } = useInView()
  const wrapperAnimation = useAnimation()
  const buttonAnimation = useAnimation()
  useEffect(() => {
    if (inView) {
      wrapperAnimation.start('visible')
      buttonAnimation.start('visible')
    } else {
      wrapperAnimation.start('hidden')
      buttonAnimation.start('hidden')
    }
  }, [inView, wrapperAnimation, buttonAnimation])

  const items: IItem[] = [
    {
      id: '1',
      title: '02+',
      subtitle: 'years experience',
      link: Sections.QUALIFICATION,
    },
    {
      id: '2',
      title: '01',
      subtitle: 'completed projects',
      link: Sections.PORTFOLIO,
    },
    {
      id: '3',
      title: '02',
      subtitle: 'companies',
      link: Sections.QUALIFICATION,
    },
  ]
  return (
    <Section ref={sectionRef}>
      <MotionH1>About Me</MotionH1>
      <MotionH3>My introduction</MotionH3>
      <Styled.ContentWrapper ref={ref}>
        <Styled.Info>
          An adaptive Frontend Developer with 2+ years of experience in building
          and maintaining web apps. Proficient in CSS, HTML, Javascript using
          ReactJS library with typescript. Experience with NestJS and
          PostgreSQL.
        </Styled.Info>
        <AnimateSharedLayout>
          <Styled.InLineCardWrapper
            layout
            variants={listWrapperVariants}
            animate={wrapperAnimation}
            initial={listWrapperVariants.hidden}
          >
            {items.map((item) => (
              <Item
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                onLinkClick={(): void =>
                  handleSectionChange(item.link as Sections)
                }
                inView={inView}
              />
            ))}
          </Styled.InLineCardWrapper>
          <Styled.DownloadLink
            href={resume}
            download='kanpichcha_resume.pdf'
            variants={scaleUpVariants}
            initial={scaleUpVariants.hidden}
            animate={buttonAnimation}
          >
            <p>Download CV</p>
            <DownloadIcon width={20} />
          </Styled.DownloadLink>
        </AnimateSharedLayout>
      </Styled.ContentWrapper>
    </Section>
  )
}

const Item = ({ title, subtitle, onLinkClick, inView }: IItem) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleOpen = () => setIsOpen(!isOpen)
  useEffect(() => {
    if (!inView) {
      setIsOpen(false)
    }
  }, [inView])

  return (
    <Styled.InlineCard
      layout
      onClick={toggleOpen}
      variants={listVerticalVariants}
      initial={listVerticalVariants.hidden}
    >
      <Styled.CardHeader>{title}</Styled.CardHeader>
      <Styled.CardSubHeader>{subtitle}</Styled.CardSubHeader>
      <AnimatePresence>
        {isOpen && onLinkClick && <Content onLinkClick={onLinkClick} />}
      </AnimatePresence>
    </Styled.InlineCard>
  )
}

const Content = ({ onLinkClick }: { onLinkClick: IItem['onLinkClick'] }) => {
  return (
    <Styled.ExpandedCard
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {onLinkClick && <TextButton onClick={onLinkClick}>See more →</TextButton>}
    </Styled.ExpandedCard>
  )
}

export default About
