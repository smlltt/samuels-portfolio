import React from 'react';
import {Box, AppBar, MenuList, Toolbar} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import theme from "../../Theme";
import {NavbarMenuItemsTypography} from "./styles";
import { Link } from 'react-router-dom';
import { routes } from '../../Router'

const NavbarComponent = () => {
    return (
        <>
        <AppBar style={{ background: theme.palette.primary.main}}>
        <MenuList>
            <Box display='flex' justifyContent="flex-end">
            <MenuItem component={Link} to={routes.projectsPath}><NavbarMenuItemsTypography>Projects</NavbarMenuItemsTypography></MenuItem>
            <MenuItem component={Link} to={routes.aboutPath}><NavbarMenuItemsTypography>About</NavbarMenuItemsTypography></MenuItem>
            <MenuItem component={Link} to={routes.contactPath}><NavbarMenuItemsTypography>Contact</NavbarMenuItemsTypography></MenuItem>
            </Box>
        </MenuList>
        </AppBar>
    <Toolbar/>
    </>
    );
};

export default NavbarComponent;
