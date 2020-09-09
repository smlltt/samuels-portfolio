import React from 'react';
import ParticleComponent from "./Particle.component";
import {Box, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {routes} from "../../Router";
import MenuItem from "@material-ui/core/MenuItem";


const LandingPageComponent = () => {


    return (
<>



<ParticleComponent />
    <div
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}
    >
        <Box display={'flex'} flexDirection={'column'}>
        <Typography variant={'h4'}>Hi, I'm Samuel :) I like coding!</Typography>

                <MenuItem component={Link} to={routes.projectsPath}><Typography>See my Work</Typography></MenuItem>

        </Box>
    </div>


</>
    );
};

export default LandingPageComponent;
