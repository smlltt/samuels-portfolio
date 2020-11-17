import React from 'react'
import { Box } from '@material-ui/core'
import ParticleComponent from './Particle.component'
import {StyledTypography, SyledBoxWholeScreen} from './styles'

const LandingPageComponent = () => (
  <Box

  >
      <ParticleComponent />
      <SyledBoxWholeScreen

      >
    {/*<ParticleComponent />*/}
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >

      <Box display="flex" flexDirection="column">
        <StyledTypography>Hi, I'm Samuel :) I like coding!</StyledTypography>

        {/*<MenuItem component={Link} to={routes.projectsPath}>*/}

        {/*  <StyledButton>See my Work</StyledButton>*/}
        {/*</MenuItem>*/}
          {/*<NavbarAnchor href={'#Projects'}>See my Work</NavbarAnchor>*/}
      </Box>
    </div>
      </SyledBoxWholeScreen>
  </Box>
)

export default LandingPageComponent
