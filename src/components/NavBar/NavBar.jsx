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
                <li className='Title'><Link to={"/"}><img src="http://assets.stickpng.com/images/58430e1ea6515b1e0ad75b56.png"></img></Link></li>
            </ul>

            <ul className="categories">
                <li><Link to={"/category/Pileta"} >Articulos para Pileta</Link></li>
                <li><Link to={"/category/Electricos"} >Articulos Electricos</Link></li>
                <li><Link to={"/category/Cava"} >Nuestra Cava</Link></li>
            </ul>

            <ul className="rightItems">
                <li><Link to={"/cart"} style={{textDecoration: 'none'}}><CartWidget/></Link></li>
                <li><Link to={"/info"} style={{textDecoration: 'none'}}><InfoIcon fontSize='medium'/></Link></li>
                <li><Link to={"/account"} style={{textDecoration: 'none'}}><AccountCircleIcon fontSize='large'/></Link></li>
            </ul>
        </div>
    )
}

export default NavBar;