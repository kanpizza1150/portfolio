import { useEffect, useMemo, useRef, useState } from 'react'
import useOnScreen from './useOnScreen'

export enum Sections {
  HOME = 'Home',
  ABOUT = 'About',
  SKILLS = 'Skills',
  QUALIFICATION = 'Qualification',
  PORTFOLIO = 'Portfolio',
  CONTACT_ME = 'Contact me',
}
const useNavigate = () => {
  const [activeSection, setActiveSection] = useState<Sections>(Sections.HOME)

  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const qualificationRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const mappedRef = {
    [Sections.HOME]: homeRef,
    [Sections.ABOUT]: aboutRef,
    [Sections.SKILLS]: skillsRef,
    [Sections.QUALIFICATION]: qualificationRef,
    [Sections.PORTFOLIO]: portfolioRef,
    [Sections.CONTACT_ME]: contactRef,
  }

  const handleSectionChange = (section: Sections) => {
    mappedRef[section]?.current?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(section)
  }

  const isHomeActive = useOnScreen(homeRef, {})
  const isAboutActive = useOnScreen(aboutRef, {})
  const isSkillActive = useOnScreen(skillsRef, {})
  const isQualificationActive = useOnScreen(qualificationRef, {})
  const isPortfolioActive = useOnScreen(portfolioRef, {})
  const isContactActive = useOnScreen(contactRef, {})

  const actives: Record<Sections, IntersectionObserverEntry | undefined> =
    useMemo(
      () => ({
        [Sections.HOME]: isHomeActive,
        [Sections.ABOUT]: isAboutActive,
        [Sections.SKILLS]: isSkillActive,
        [Sections.QUALIFICATION]: isQualificationActive,
        [Sections.PORTFOLIO]: isPortfolioActive,
        [Sections.CONTACT_ME]: isContactActive,
      }),
      [
        isAboutActive,
        isSkillActive,
        isQualificationActive,
        isPortfolioActive,
        isContactActive,
        isHomeActive,
      ]
    )
  useEffect(() => {
    const keys: string[] = Object.keys(actives)
    keys.forEach((key: string) => {
      if (actives[key as Sections]?.isIntersecting) {
        setActiveSection(key as Sections)
      }
    })
  }, [actives, activeSection])

  return {
    Sections,
    activeSection,
    handleSectionChange,
    setActiveSection,
    refs: {
      homeRef,
      contactRef,
      aboutRef,
      skillsRef,
      qualificationRef,
      portfolioRef,
    },
  }
}

export default useNavigate
