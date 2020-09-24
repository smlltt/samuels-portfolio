import React, {useState} from 'react';
import './App.css';
import LandingPage from "./Screens/LandingPage";
import Projects from "./Screens/Projects";
import Navbar from "./Components/Navbar";
import About from "./Screens/About/About";
import Contact from "./Screens/Contact/Contact";
import { routes } from './Router'
import {useLocation} from "react-router-dom";
import {Box} from "@material-ui/core";
import ScrollToTop from "react-scroll-to-top";



function App() {
const location = useLocation().pathname;
const [selectedComponent, setSelectedComponent] = useState('Projects');
const [contactButtonClicked, setContactButtonClicked] = useState(false);

  const hideScrollToTop = () => setContactButtonClicked(true);
  const showScrollToTop = () => setContactButtonClicked(false);

  const handleComponentSelection: (section: string)=>void = (section: string) => {
    setSelectedComponent(section)
  };

  return (
    <div>
        {location===routes.landingPagePath ? <LandingPage /> :
            (
<>
                  {/*<BackgroundImage>*/}
{/*<div>*/}

            <Navbar onSelection={handleComponentSelection}/>
            {/*<Switch>*/}
  {!contactButtonClicked ? <ScrollToTop smooth /> : null}

                  {/*<BackgroundImage>*/}
              <Box
                style={{
                  display: "flex",
                  alignItems: 'center',
                  height: '100%'
                }}
              >

                <Projects selected={selectedComponent}/>

            {/*<Route path={routes.projectsPath} component={Projects} />*/}
            {/*<Route path={routes.aboutPath} component={About} />*/}
            {/*<Route path={routes.contactPath} component={Contact} />*/}


                {/* light one: <a href="https://www.vecteezy.com/free-vector/background">vedo componetne materiaul ui da usare Background Vectors by Vecteezy</a>*/}
                {/* black one: <a href='https://www.freepik.com/vectors/background'>Background vector created by vector_corp - www.freepik.com</a>*/}
              </Box>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: 'center',
                        height: '100%'
                      }}
                    >
                      <About selected={selectedComponent}/>
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        alignItems: 'center',
                        height: '100%'
                      }}
                    >
                      <Contact selected={selectedComponent}
                               hideScrollToTop={hideScrollToTop}
                               showScrollToTop={showScrollToTop}
                               contactButtonClicked={contactButtonClicked}
                      />
                    </Box>
                  {/*</BackgroundImage>*/}


            {/*</Switch>*/}


{/*</div>*/}
{/*                  </BackgroundImage>*/}
                </>


          )
        }

    </div>
  );
}

export default App;
