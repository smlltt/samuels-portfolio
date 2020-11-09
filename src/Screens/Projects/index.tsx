import React, {FC} from 'react';
import ProjectsCards from "./Carousel";
import {Box, Container} from "@material-ui/core";





const Projects: FC = () => {

    return (
<>

  <div
    style={{
      backgroundRepeat: 'no-repeat',width:'100%',height:'100%',
    }}>

    <Box style={{display:'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100wh'}}>
      <Container>

            <ProjectsCards/>
      </Container>

    </Box>
  </div>

</>
    );
};

export default Projects;
