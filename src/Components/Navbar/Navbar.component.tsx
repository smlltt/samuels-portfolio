import React, {FC, useState} from 'react';
import {Box, MenuList,Paper} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {NavbarMenuItemsTypography} from "./styles";
import Headroom from 'react-headroom';



interface OwnProps {
  onSelection(section:string): void;
}

const menuItemKeys = ['Projects', 'About', 'Contact'];

const NavbarComponent:FC<OwnProps>= ({onSelection}) => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleMenuItemClick = (index: number, section: string) => {
        setSelectedIndex(index);
      onSelection(section);
    };

    const mappedMenuItemKeys = menuItemKeys.map((key, index)=>(
  <MenuItem
    key={key}
    selected={index === selectedIndex}
  onClick={() => handleMenuItemClick(index, key)}
  >
      <NavbarMenuItemsTypography>
      {key}
      </NavbarMenuItemsTypography>
  </MenuItem>
    ));

    return (
        <>
          <Headroom>

        <Paper>
        <MenuList>
            <Box display='flex' justifyContent="flex-end">
                {mappedMenuItemKeys}
            </Box>
        </MenuList>
        </Paper>

            </Headroom>

    </>
    );
};

export default NavbarComponent;
