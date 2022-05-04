import * as React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

function footer(){
    return(
        <div className="bottomBar">
            <div className="icons">
                <h4>Nuestras Redes</h4>
                <div className='logos'>
                    <a src="https://www.instagram.com/oabianchi/?hl=es-la">Instagram</a>
                    <a src="https://www.facebook.com/OscarAlejandroBianchi">Fcebook</a>
                    <a src="https://wa.me/+541134088301?text=Me%20interesa%20comprar%20un%20producto.">WhatsApp</a>
                </div>
                
            </div>
            <div className='pages'>
                <h4>Pages</h4>
                <div className='logos2'>    
                    <Link to={"/"}>Catalgo</Link>
                    <Link to={"/cart"}>Carrito</Link>
                    <Link to={"info"}>Sobre Nosotros</Link>
                </div>
            </div>
        </div>
    )
}

export default footer;