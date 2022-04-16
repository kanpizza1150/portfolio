import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { Container, SectionWrapper } from './styles'
import GlobalStyled from './styles/global'

import './styles/fonts.css'
import useTheme from './hook/useTheme'
import useNavigate from './hook/useNavigate'
import Home from './container/Home'
import About from './container/About'
import Skills from './container/Skills'
import Qualification from './container/Qualification'
import Portfolio from './container/Portfolio'
import Contact from './container/Contact'
import Nav from './component/Nav'
import Footer from './component/Footer'
import QuickMenu from './component/QuickMenu'

const App: FC = () => {
  const { theme, handleThemeChanges, themeProps } = useTheme()
  const { handleSectionChange, refs, activeSection } = useNavigate()

  return (
    <ThemeProvider theme={themeProps}>
      <GlobalStyled />
      <Container>
        <Nav
          handleSectionChange={handleSectionChange}
          activeSection={activeSection}
        />
        <SectionWrapper>
          <Home
            handleSectionChange={handleSectionChange}
            sectionRef={refs.homeRef}
          />
          <About
            handleSectionChange={handleSectionChange}
            sectionRef={refs.aboutRef}
          />
          <Skills
            handleSectionChange={handleSectionChange}
            sectionRef={refs.skillsRef}
          />
          <Qualification
            handleSectionChange={handleSectionChange}
            sectionRef={refs.qualificationRef}
          />
          <Portfolio
            handleSectionChange={handleSectionChange}
            sectionRef={refs.portfolioRef}
          />
          <Contact
            handleSectionChange={handleSectionChange}
            sectionRef={refs.contactRef}
          />
          <QuickMenu handleThemeChange={handleThemeChanges} theme={theme} />
          <Footer />
        </SectionWrapper>
      </Container>
    </ThemeProvider>
  )
}

export default App
