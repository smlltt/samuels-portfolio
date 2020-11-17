import React from 'react'
import styled from 'styled-components'
import {Box, Button, Typography} from '@material-ui/core'

export const SyledBoxWholeScreen = styled(Box)`
  @media (max-width: 600px) {
    
    height: 100vh;
}
`

export const StyledTypography = styled(Typography)`
  font-family: 'Lato', sans-serif;
  font-size: 3rem;
`

export const StyledButton = styled(Button)`
  border: solid 1px #1f1f1f;
  background: transparent;
  color: #1f1f1f;
  cursor: pointer;
  border-radius: 0px;
  text-decoration: none;
  padding: 12px 18px;
  font-size: 12px;
  line-height: 19px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  letter-spacing: 3px;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  &:hover {
    border: solid 2px #1f1f1f;
    background: #1f1f1f;
    color: #fff;
  }
`

export const NavbarAnchor = styled.a`

  color: black;
  text-decoration: none;
  text-transform: uppercase;
    font-family: 'Montserrat', sans-serif; font-weight:400;
   letter-spacing: 5px;
       font-size: 12px;
    @media (min-width: 600px) {
    
     padding: 12px 18px;
    line-height: 19px;
}
  @media (max-width: 420px) {
    font-size: 0.5rem;
}
@media (max-width: 360px) {
    font-size: 0.5rem;
    letter-spacing: 1px;
}

@media (max-width: 320px) {
    font-size: 0.4rem;
    letter-spacing: 1px;
}
            &:hover{
    color: white;
    
`
