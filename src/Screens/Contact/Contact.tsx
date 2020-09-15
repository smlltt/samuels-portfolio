import React, {FC, useEffect, useRef} from 'react';
import background from '../../pictures/project-background.jpg'
import {Box, Container, Typography} from "@material-ui/core";
import {scrollComponents} from '../../SharedLogic';


interface OwnProps {
  selected: string;
}


const Contact: FC<OwnProps> = ({selected}) => {

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollComponents.scrollComponentIntoView('Contact', selected, ref)
  }, [selected]);

    return (
      <div
        ref={ref}
        style={{
        backgroundImage: `url("${background}")`,backgroundRepeat: 'no-repeat',width:'100%',height:'100%',
      }}>
        <Container>


          <Box style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100wh'}}>
           <Typography>Contact</Typography>
          </Box>
        </Container>
        </div>
    );
};

export default Contact;
