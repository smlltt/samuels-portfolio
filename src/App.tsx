import React from 'react';
import './App.css';
import LandingPage from "./Screens/LandingPage";
import Projects from "./Screens/Projects";
import Navbar from "./Components/Navbar";
import About from "./Screens/About/About";
import Contact from "./Screens/Contact/Contact";
import { Switch, Route } from 'react-router-dom';
import { routes } from './Router'
import {useLocation} from "react-router-dom";
import {Container} from "@material-ui/core";
import {BackgroundImage} from "./Screens/Projects/styles";

function App() {
const location = useLocation().pathname

  return (
    <div>
        {location===routes.landingPagePath ? <LandingPage /> :
            (

                <Container>
                  <BackgroundImage>
            <Navbar />
            <Switch>

            <Route path={routes.projectsPath} component={Projects} />
            <Route path={routes.aboutPath} component={About} />
            <Route path={routes.contactPath} component={Contact} />

            </Switch>
                  </BackgroundImage>
                </Container>

          )
        }

    </div>
  );
}

export default App;
