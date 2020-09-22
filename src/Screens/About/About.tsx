import React, {FC, useEffect, useRef} from 'react';
import {Box, Container, Typography} from "@material-ui/core";
import {scrollComponents} from '../../SharedLogic';

interface OwnProps {
  selected: string;
}


const About: FC<OwnProps> = ({selected}) => {

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollComponents.scrollComponentIntoView('About', selected, ref)
  }, [selected]);

    return (
        // <div
        //   ref={ref}
        //   style={{
        //   backgroundImage: `url("${background}")`,backgroundRepeat: 'no-repeat',width:'100%',height:'100%',
        // }}>

      <div
        ref={ref}
        style={{
          backgroundRepeat: 'no-repeat',width:'100%',height:'100%',
        }}>
          <Box style={{display:'flex', justifyContent: 'center', height: '100vh', width: '100wh'}}>
<Container>
  {/*<button onClick={()=>console.log(selected)}></button>*/}
  <Typography>Something about me</Typography>
</Container>
          </Box>
        </div>
    );
};

export default About;
