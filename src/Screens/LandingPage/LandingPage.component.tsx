import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import ParticleComponent from "./Particle.component";
import { CardContentAbsolute } from './styles'
import { Typography } from "@material-ui/core";
import { ButtonFlexStart } from "./styles";



const LandingPageComponent = () => {
    return (
        <Card>
            <CardMedia>
<ParticleComponent />
            </CardMedia>
            <CardContentAbsolute>
                <Typography variant={"h3"}>Hi, I'm Samuel :) I like coding!</Typography>
<ButtonFlexStart>See my work</ButtonFlexStart>
            </CardContentAbsolute>
        </Card>

    );
};

export default LandingPageComponent;
