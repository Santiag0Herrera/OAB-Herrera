import React from 'react'
import './Card.css'
function card(){
    return (
    <div className='Articulos'>
        <img src='https://i0.wp.com/brochure3d.com/wp-content/plugins/elementor/assets/images/placeholder.png?w=750&ssl=1'></img>
        <div className='contenidoArticulos'>
            <h3>Articulo</h3>
            <h4>Descripcion del articulo</h4>
            <h4>$3500</h4>
            <button>Agregar al Carrito</button>
        </div>
    </div>
    )
}
export default card;
