import React, {FC, useEffect} from 'react';
import ProjectsCards from "./Carousel";
import {scrollComponents} from '../../SharedLogic';


interface OwnProps {
  selected: string;
}


const Projects: FC<OwnProps> = ({selected}) => {


  useEffect(() => {
    if (selected === 'Projects') {
      scrollComponents.scrollToTop();
    }
  }, [selected]);

    return (
<>


            <ProjectsCards/>
    {/*        per non dimenticarmi l'attribuzione!!!*/}


</>
    );
};

export default Projects;
