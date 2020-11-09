import styled from 'styled-components';
import background from '../../pictures/project-background.jpg'
import {CardHeader, CardMedia, Typography} from "@material-ui/core";




export const BackgroundImage = styled.div`
   
    background-image: url("${background}");
   position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1;

`

export const StyledTypography = styled(Typography)`
font-family: 'Lato', sans-serif; font-weight:400;
       font-size: 12px;
`

export const StyledCardHeader = styled(CardHeader)`
font-family: 'Lato', sans-serif; 
       font-size: 15px;
       font-weight: bold;
       letter-spacing: 3px;
`

export const StyledCardMedia = styled(CardMedia)`
cursor: pointer;
`




