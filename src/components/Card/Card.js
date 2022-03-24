import React from 'react'
import './Card.css'

export default function card(props){
    return(
        <div className='Articulos'>
            <h2>{props.title}</h2>
            <img src='https://www.educaciontrespuntocero.com/wp-content/uploads/2019/02/girasoles-978x652.jpg'></img>
            <div className='contenidoArticulos'>
                <h3>{props.description}</h3>
                <h3>${props.price}</h3>
                <button>Comprar</button>
            </div>
        </div>
    )
}
