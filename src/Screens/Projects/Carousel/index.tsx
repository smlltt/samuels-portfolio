import React, {useState} from 'react';
import {Grid} from '@material-ui/core'
import CarouselItem from "./CarouselItem";



const ProjectsCarousel = () => {

    const [imgs] = useState([
        {title:'yoga-hub',imgSrc:'https://image.flaticon.com/icons/svg/2991/2991411.svg', description:'This app does this and this and this and this and this and this and this.'},
        {title:'note-app',imgSrc:'https://image.flaticon.com/icons/svg/752/752326.svg', description:'This app does this and this and this and this and this and this and this.'},
        {title:'weather-app',imgSrc:'https://image.flaticon.com/icons/svg/2917/2917242.svg', description:'This app does this and this and this and this and this and this and this.'}
        ])

    const mappedImgs = imgs.map(item =>{

        return <CarouselItem {...item}/>;
    })

    return (
<>
        <Grid container spacing={6} justify={"center"} >
            {mappedImgs}
        </Grid>
    </>
    )

};



export default ProjectsCarousel;
