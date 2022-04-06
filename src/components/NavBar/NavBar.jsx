import React from 'react'
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
function NavBar(){
    return(
        <div className="header">
            <ul className="leftItems">
                <li><a href='...'><MenuIcon fontSize='large'/></a></li>
                <li className='Title'><Link to={"/"}><h1>OAB</h1></Link></li>
            </ul>

            <ul className="rightItems">
                <li><Link to={"/dfghdfgh"}>Error 404</Link></li>
                <li><Link to={"/cart"}><CartWidget/></Link></li>
                <li><Link to={'/info'}><InfoIcon fontSize='medium'/></Link></li>
                <li><Link to={"/account"}><AccountCircleIcon fontSize='large'/></Link></li>
            </ul>
        </div>
    )
}

export default NavBar;