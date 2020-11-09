import React from 'react';
import {Button} from '@material-ui/core/';
import styled from "styled-components";
import {TextField} from "formik-material-ui";





export const SubmitButton = styled(Button)`
border:solid 1px #1f1f1f;
    background: transparent;
    color: #1f1f1f;
    cursor: pointer;
    border-radius: 0px;
    text-decoration: none;
    padding: 12px 18px;
    font-size: 12px;
    line-height: 19px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif; font-weight:400;
    letter-spacing: 3px;
    -webkit-transition: all .4s ease-in-out;
       -moz-transition: all .4s ease-in-out;
        -ms-transition: all .4s ease-in-out;
         -o-transition: all .4s ease-in-out;
            transition: all .4s ease-in-out;
            &:hover{
    border:solid 2px #1f1f1f;
    background: #1f1f1f;
    color: #fff;
  }
`

export const StyledTextField = styled(TextField)`



.MuiInputBase-root{
font-family: 'Lato', sans-serif; 
}


//I add some styles on focus, I work with scrollspy


.Mui-focused{
background: #F0F0F0;
}

 .MuiFormLabel-root{
 color:grey;
 background: white;
 }

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}

  /* default */
  .MuiInput-underline:before {
    border-bottom: 1px solid black;
  }
  /* hover (double-ampersand needed for specificity reasons. */
  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid black;
  }
  /* focused */
  .MuiInput-underline:after {
    border-bottom: 2px solid black;
  }
`;

export const MessageTextField = styled(TextField)`

.MuiInputBase-root{
font-family: 'Lato', sans-serif; 
}

.Mui-focused{
background: #F0F0F0;
}

 .MuiFormLabel-root{
 color:grey;
 background: white;
 }

.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
border: 2px solid black;
}

.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border: 2px solid black;
}



`;