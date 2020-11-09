import React, { FC } from 'react'
import { Box, Container, MenuList, Paper } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import { NavbarAnchor, StyledMenuItem } from './styles'
import Headroom from 'react-headroom'
//@ts-ignore
import ScrollspyNav from 'react-scrollspy-nav'

const menuItemKeys = ['Projects', 'About', 'Contact']

const NavbarComponent: FC = () => {
  const mappedMenuItemKeys = menuItemKeys.map((key) => (
    <MenuItem key={key}>
      <StyledMenuItem>
        <NavbarAnchor href={'#' + key}>{key}</NavbarAnchor>
      </StyledMenuItem>
    </MenuItem>
  ))

  return (
    <>
      <Headroom>
        <Container>
          <Paper>
            <MenuList>
              <ScrollspyNav
                scrollTargetIds={menuItemKeys}
                activeNavClass="is-active"
              >
                <Box display="flex" justifyContent="flex-end">
                  {mappedMenuItemKeys}
                </Box>
              </ScrollspyNav>
            </MenuList>
          </Paper>
        </Container>
      </Headroom>
    </>
  )
}

export default NavbarComponent
