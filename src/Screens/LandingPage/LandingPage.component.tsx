import React from 'react'
import { Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'
import { routes } from '../../Router'
import ParticleComponent from './Particle.component'
import { StyledButton, StyledTypography } from './styles'

const LandingPageComponent = () => (
  <>
    <ParticleComponent />
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

        <MenuItem component={Link} to={routes.projectsPath}>
          <StyledButton>See my Work</StyledButton>
        </MenuItem>
      </Box>
    </div>
  </>
)

export default LandingPageComponent
