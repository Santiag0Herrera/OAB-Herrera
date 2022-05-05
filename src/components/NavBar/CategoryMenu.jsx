import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import LightIcon from '@mui/icons-material/Light';
import WineBarIcon from '@mui/icons-material/WineBar';
import PoolIcon from '@mui/icons-material/Pool';
import {Link} from 'react-router-dom';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='menuGroup'>
            <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
            <h3 className='Home2' style={{textDecoration: 'none'}}>Categorias</h3>
            </Button>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}  MenuListProps={{ 'aria-labelledby':  'basic-button', }}>
                <div className="InfoWidgetIcon2"><Link to={"/pileta"}><PoolIcon/>Para Pileta</Link></div>
                <div className="InfoWidgetIcon2"><Link to={"/electricos"}>< LightIcon/>Electricos</Link></div>
                <div className="InfoWidgetIcon2"><Link to={"/cava"}><WineBarIcon/>Vinos</Link></div>
            </Menu>
        </div>
    );
}
