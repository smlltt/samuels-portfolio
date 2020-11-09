import React, {FC} from 'react';
import {Box, Card, CardContent, Container, Grid} from "@material-ui/core";
import {Highlighted, StyledContent, StyledTitle} from "./styles";




const About: FC= () => {

    return (

      <div
        style={{
          backgroundRepeat: 'no-repeat',width:'100%',height:'100%',
        }}>
          <Box style={{display:'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100wh'}}>
<Container>

<Grid container
      direction="row"
      justify="center"
      alignItems="center"
>
    <Grid item xs={12} sm={10} md={8} lg={6}>
      <Card>
          <CardContent>
  <StyledTitle>Something about me</StyledTitle>
              <StyledContent>My name is Samuel Liotta. I delevop front-end applications. <br/>
              The core technologies I have been using so far in my projects are <Highlighted>React JS</Highlighted> with hooks for UI, <Highlighted>Redux</Highlighted> for state management, <Highlighted>Material UI</Highlighted> and <Highlighted>styled-components</Highlighted> for design, <Highlighted>Firebase</Highlighted> for backend tasks.<br/>
              I am always on the lookout for solutions to make web development faster and easier.  In this simple portfolio website, for example, I used react-scrollspy-nav to handle the scrolling navigation, as well as emailjs and Formik to handle the contact form section. <br/>I use libraries whenever possible and write my code from scratch whenever necessary.
                  <br/>
                  In my spare time I like coding, climbing, doing yoga, learning languages, cooking, listening to electronic music and doing many more exciting things that you can find on my Instagram profile (I'm joking: I don't have one).
              </StyledContent>
          </CardContent>
      </Card>
    </Grid>
</Grid>
</Container>
          </Box>
        </div>
    );
};

export default About;
