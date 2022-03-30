import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

export default function Card ({data}){
    const {title, description, image, price, stock} = data;
    return(
        <div className='Articulos'>
            <h2>{title}</h2>
            <img src= {image} ></img>
            <div className='contenidoArticulos'>
                <p>{description}</p>
                <h3>Precio: ${price}</h3>
                <h3>Stock Disponible: {stock}</h3>
                <ItemCount stock={stock}/>
                <button>Comprar</button>
            </div>
        </div>
    );
};