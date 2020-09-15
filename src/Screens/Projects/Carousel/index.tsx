import React, {useState} from 'react';
import {Grid} from '@material-ui/core'
import CarouselItem from "./CarouselItem";




const ProjectsCards = () => {



    const [imgs] = useState([
        {title:'yoga-hub',imgSrc:'https://image.flaticon.com/icons/svg/2991/2991411.svg',
            description:'This app does this and this and this and this and this and this and this.', link: 'https://github.com/Noicoo/yoga-hub'},
        {title:'note-app',imgSrc:'https://image.flaticon.com/icons/svg/752/752326.svg',
            description:'This app does this and this and this and this and this and this and this.', link: 'https://codesandbox.io/s/friendly-raman-wqweg'},
        {title:'weather-app',imgSrc:'https://image.flaticon.com/icons/svg/2917/2917242.svg',
            description:'This app does this and this and this and this and this and this and this.', link: 'https://codesandbox.io/s/trusting-kowalevski-lt0eq'}
        ]);


    const mappedImgs = imgs.map(item =>{

        return <CarouselItem {...item} />;
    });



    return (
<>

        <Grid container spacing={10} justify={"center"}>

            {mappedImgs}

            {/*<a href="https://www.vecteezy.com/free-vector/background">Background Vectors by Vecteezy fffffghhghgfdfdfdfdfdfdfdfdfd</a>*/}

        </Grid>



    </>
    )

};



export default ProjectsCards;
