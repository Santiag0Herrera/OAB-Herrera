import {useContext} from 'react'
import './NavBar.css'
import InfoIcon from '@mui/icons-material/Info';
import CartWidget from '../CartWidget/CartWidget';
import LightIcon from '@mui/icons-material/Light';
import WineBarIcon from '@mui/icons-material/WineBar';
import PoolIcon from '@mui/icons-material/Pool';
import {Link} from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import HomeIcon from '@mui/icons-material/Home';


function NavBar(){
    const {lightTheme, handleTheme} = useContext(ThemeContext)
    return(
        <>
            <ul className="header">
                <div className='NavGroup'>
                    <li><Link to={"/"}><h3 className='Home'>Home</h3></Link></li>
                    <li><Link to={"/cart"} style={{textDecoration: 'none', padding: '0px'}}><div className='CartWidgetIcon'><CartWidget/></div></Link></li>
                    <li><Link to={"/info"} style={{textDecoration: 'none'}}><InfoIcon className="InfoWidgetIcon" fontSize='medium'/></Link></li>
                </div>
                <div className='NavGroup'>
                    <li><Link to={"/pileta"}><PoolIcon className="InfoWidgetIcon"/></Link></li>
                    <li><Link to={"/electricos"}>< LightIcon className="InfoWidgetIcon"/></Link></li>
                    <li><Link to={"/cava"}><WineBarIcon className="InfoWidgetIcon"/></Link></li>
                </div>
            </ul>
        </>
    )
}

export default NavBar;