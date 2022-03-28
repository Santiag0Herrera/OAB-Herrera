import React from 'react'
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import CartWidget from '../CartWidget/CartWidget';
function NavBar(){
    return(
        <div className="header">
            <div className="leftItem">
                <a href='...'><MenuIcon fontSize='large'/></a>
            </div>
            <ul className="rightItems">
                <CartWidget/>
                <li><a href="..."><InfoIcon fontSize='medium'/></a></li>
                <li><a href="..."><AccountCircleIcon fontSize='large'/></a></li>
            </ul>
        </div>
    )
}

export default NavBar;