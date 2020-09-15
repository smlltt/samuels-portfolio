import React, {FC, useEffect, useRef} from 'react';
import background from '../../pictures/project-background.jpg'
import {Container, Typography} from "@material-ui/core";
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
        <div
          ref={ref}
          style={{
          backgroundImage: `url("${background}")`,backgroundRepeat: 'no-repeat',width:'100%',height:'100%',
        }}>
<Container>
  {/*<button onClick={()=>console.log(selected)}></button>*/}
  <Typography>Something about me</Typography>
</Container>
        </div>
    );
};

export default About;
