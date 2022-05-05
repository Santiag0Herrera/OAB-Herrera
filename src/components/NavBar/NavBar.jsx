// import {useContext} from 'react'
// import ThemeContext from '../../context/ThemeContext';
import './NavBar.css'
import InfoIcon from '@mui/icons-material/Info';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import BasicMenu from './CategoryMenu';

function NavBar(){
    // const {lightTheme, handleTheme} = useContext(ThemeContext)
    return(
        <>
            <ul className="header">
                <div className='NavGroup'>
                    <li><Link to={"/"}><h3 className='Home'>HOME</h3></Link></li>
                    <li><Link to={"/cart"} style={{textDecoration: 'none', padding: '0px'}}><div className='CartWidgetIcon'><CartWidget/></div></Link></li>
                    <li><Link to={"/info"} style={{textDecoration: 'none'}}><InfoIcon className="InfoWidgetIcon" fontSize='medium'/></Link></li>
                </div>
                <BasicMenu/>
            </ul>
        </>
    )
}

export default NavBar;