import React from 'react';
import {Link} from 'react-router-dom';
import './Item.css';

export default function Card ({data}){
    const {title, description, image, price, stock, id} = data;
    return(
        <Link to={'/Item/ ${id}'} style={{textDecoration: 'none'}} className='Articulos'>
            <h2>{title}</h2>
            <img src= {image} ></img>
            <div className='contenidoArticulos'>
                <h3>${price}</h3>
                <h3>Stock Disponible: {stock}</h3>
                <h4>{description}</h4>
                <div class="BuyDetailButtons">
                    <button>Comprar</button>
                    <button>Detalles</button>
                </div>
            </div>            
        </Link>
    );
};