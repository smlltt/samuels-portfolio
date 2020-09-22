import React, {FC, useEffect, useRef, useState} from 'react';
import {Box, Container} from "@material-ui/core";
import {scrollComponents} from '../../SharedLogic';
import ContactComponent from "./Contact Component";
import {emailjsApi} from "../../Services/emailjs";


interface OwnProps {
  selected: string;
}


const Contact: FC<OwnProps> = ({selected}) => {

  const ref = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    scrollComponents.scrollComponentIntoView('Contact', selected, ref)
  }, [selected]);

  const toggleError = () => setError(!error);

  const handlePopoverClose = () => toggleError();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {

    setAnchorEl(event.currentTarget);

    emailjsApi.sendEmail('czesc','dd@fd.it','hopefully last test :P')
      .then((res) => {
        if (error){
          toggleError();
        }
        else {
          console.log(res.text);
        }
      }, (err) => {
        if (!error){
          toggleError();
        }
        //use reCaptcha
        console.log(err.text);
      });
  };

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
        <Container>


          <Box style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100wh'}}>

            <ContactComponent
              error={error}
              handleClick={handleClick}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
            />
          </Box>
        </Container>
        </div>
    );
};

export default Contact;
