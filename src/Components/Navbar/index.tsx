import React, {FC} from 'react';
import NavbarComponent from "./Navbar.component";


interface OwnProps {
  onSelection(section: string): void;
}


const Navbar:FC<OwnProps> = ({onSelection}) => {
    return (
        <div>
<NavbarComponent onSelection={onSelection}/>
        </div>
    );
};

export default Navbar;
