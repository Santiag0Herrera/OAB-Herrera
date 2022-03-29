import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Card.css';

export default function Card ({data}){
    const {title, description, image, price} = data;
    return(
        <div className='Articulos'>
            <h2>{title}</h2>
            <img src= {image} ></img>
            <div className='contenidoArticulos'>
                <p>{description}</p>
                <h3>Precio: ${price}</h3>
                <ItemCount/>
                <button>Comprar</button>
            </div>
        </div>
    );
};