import { MenuItem } from '@material-ui/core'
import styled from 'styled-components'

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

export const StyledMenuItem = styled(MenuItem)`

  -webkit-transition: all .4s ease-in-out;
       -moz-transition: all .4s ease-in-out;
        -ms-transition: all .4s ease-in-out;
         -o-transition: all .4s ease-in-out;
            transition: all .4s ease-in-out;
            &:hover{
    border:solid 2px #1f1f1f;
    background: #1f1f1f;
`
