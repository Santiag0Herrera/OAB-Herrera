import {useContext} from 'react'
import './NavBar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import CartWidget from '../CartWidget/CartWidget';
import LightIcon from '@mui/icons-material/Light';
import Start from "../../components/Start/Start";
import WineBarIcon from '@mui/icons-material/WineBar';
import PoolIcon from '@mui/icons-material/Pool';
import {Link} from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import ThemeSwitch from './ThemeSwitch';


function NavBar(){
    const {lightTheme, handleTheme} = useContext(ThemeContext)
    console.log("Light State: " , lightTheme)
    return(
        <>
            <ul className="header">
                <li><Link to={"/category/Pileta"}><PoolIcon/></Link></li>
                <li><Link to={"/category/Electricos"}>< LightIcon/></Link></li>
                <li><Link to={"/category/Cava"}><WineBarIcon/></Link></li>
                <li className='logo'><Link to={"/"}><img src="https://logodownload.org/wp-content/uploads/2013/12/apple-logo-4.png"></img></Link></li>
                <li><Link to={"/cart"} style={{textDecoration: 'none', padding: '0px'}}><div className='CartWidgetIcon'><CartWidget/><p>4</p></div></Link></li>
                <li><Link to={"/info"} style={{textDecoration: 'none'}}><InfoIcon fontSize='medium'/></Link></li>
                <li><Link to={"/account"} style={{textDecoration: 'none'}}><AccountCircleIcon fontSize='large'/></Link></li>
                <li><ThemeSwitch/></li>
            </ul>
            <Start/>
            
        </>
    )
}

export default NavBar;