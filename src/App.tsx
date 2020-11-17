import React, { useState } from 'react'
import './App.css'
import { Box } from '@material-ui/core'
import ScrollToTop from 'react-scroll-to-top'
import LandingPage from './Screens/LandingPage'
import Projects from './Screens/Projects'
import Navbar from './Components/Navbar'
import About from './Screens/About/About'
import Contact from './Screens/Contact/Contact'


const App = () => {
  // Contact logic

  const [contactButtonClicked, setContactButtonClicked] = useState(false)

  // App logic


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const hideScrollToTop = () => setContactButtonClicked(true)
  const showScrollToTop = () => setContactButtonClicked(false)
  const handleScrollToTop = () => {
    scrollToTop()
  }

  return (
    <div>
      {/*{location === routes.landingPagePath ? (*/}
      {/*  <LandingPage />*/}
      {/*) : (*/}
        <>

          <Navbar />
          <LandingPage />
          {!contactButtonClicked ? (
            <ScrollToTop onClick={handleScrollToTop} />
          ) : null}

          <div id="Projects">
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Projects />
            </Box>
          </div>
          <div id="About">
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <About />
            </Box>
          </div>
          <div id="Contact">
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Contact
                hideScrollToTop={hideScrollToTop}
                showScrollToTop={showScrollToTop}
                contactButtonClicked={contactButtonClicked}
              />
            </Box>
          </div>
        </>
      {/*// ) }*/}
    </div>
  )
}

export default App
