import { FC, SVGProps, useEffect, useMemo, useRef, useState } from 'react'
import useOnScreen from './useOnScreen'
import { ReactComponent as homeIcon } from '../images/menuIcon/home.svg'
import { ReactComponent as skillIcon } from '../images/menuIcon/skills.svg'
import { ReactComponent as aboutIcon } from '../images/menuIcon/about.svg'
import { ReactComponent as qualificationIcon } from '../images/menuIcon/qualification.svg'
import { ReactComponent as portfolioIcon } from '../images/menuIcon/portfolio.svg'
import { ReactComponent as contactIcon } from '../images/menuIcon/contact.svg'

export enum Sections {
  HOME = 'Home',
  ABOUT = 'About',
  SKILLS = 'Skills',
  QUALIFICATION = 'Qualification',
  PORTFOLIO = 'Portfolio',
  CONTACT_ME = 'Contact me',
}

export const MenuLogo: Record<Sections, FC<SVGProps<SVGSVGElement>>> = {
  [Sections.HOME]: homeIcon,
  [Sections.ABOUT]: aboutIcon,
  [Sections.SKILLS]: skillIcon,
  [Sections.QUALIFICATION]: qualificationIcon,
  [Sections.PORTFOLIO]: portfolioIcon,
  [Sections.CONTACT_ME]: contactIcon,
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
