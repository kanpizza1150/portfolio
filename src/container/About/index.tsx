import { FC, useState } from 'react'
import * as Styled from './styles'
import { Section } from '../../styles'
import { PageProps } from '../../interface'
import resume from '../../images/resume.pdf'
import { ReactComponent as DownloadIcon } from '../../images/download.svg'
import { motion, AnimatePresence } from 'framer-motion'
const About: FC<PageProps> = ({
  handleSectionChange,
  sectionRef,
}: PageProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const items = [
    { id: '1', title: '2+', subtitle: 'years experience' },
    { id: '2', title: '1', subtitle: 'completed projects' },
    { id: '3', title: '2', subtitle: 'companies' },
  ]
  const item = { id: '1', title: 'test', subtitle: 'test' }
  return (
    <Section ref={sectionRef}>
      <h1>About Me</h1>
      <h3>My introduction</h3>

      <Styled.ContentWrapper>
        <div>
          <Styled.Info>
            An adaptive Frontend Developer with 2+ years of experience in
            building and maintaining web apps. Proficient in CSS, HTML,
            Javascript using ReactJS library with typescript. Experience with
            NestJS and PostgreSQL. Seeking challenges and opportunities that
            will enhance self-development. Keen on exploring new areas in
            technology.
          </Styled.Info>
          {/* <div>
            <div>
              <div>2+</div>
              <div>years experience</div>
            </div>
            <div>
              <div>1</div>
              <div>completed projects</div>
            </div>
            <div>
              <div>2</div>
              <div>companies</div>
            </div>
          </div> */}
          {items.map((item) => (
            <motion.div
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
            >
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedId && (
              <motion.div layoutId={selectedId}>
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
                <motion.button onClick={() => setSelectedId(null)}>
                  close
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <a href={resume} download='kanpichcha_resume.pdf'>
            <Styled.DownLoadButton>
              <DownloadIcon />
              <p>Download CV</p>
            </Styled.DownLoadButton>
          </a>
        </div>
      </Styled.ContentWrapper>
    </Section>
  )
}

export default About
