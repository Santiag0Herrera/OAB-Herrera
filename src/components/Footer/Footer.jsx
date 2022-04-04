import * as React from 'react'
import './Footer.css'
function footer(){
    return(
        <div className="bottomBar">
            <ul className="icons">
                <li><a src="https://www.instagram.com/oabianchi/?hl=es-la">Instagram</a></li>
                <li><a src="https://www.facebook.com/OscarAlejandroBianchi">Fcebook</a></li>
                <li><a src="https://wa.me/+541134088301?text=Me%20interesa%20comprar%20un%20producto.">WhatsApp</a></li>
            </ul>
        </div>
    )
}

export default footer;