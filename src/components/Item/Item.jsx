import React from 'react';
import {Link} from 'react-router-dom';
import './Item.css';

export default function Card ({data}){
    const {title, description, image, price, stock, id} = data;
    return(
        <div className='Articulos'>
            <h2>{title}</h2>
            <img src= {image} ></img>
            <div className='contenidoArticulos'>
                <h3>${price}</h3>
                <h3>Stock Disponible: {stock}</h3>
                <div class="BuyDetailButtons">
                    <button>Comprar</button>
                    <Link to={`/Item/${id}`} style={{textDecoration: 'none'}}><button>Detalles</button></Link>
                </div>
            </div>            
        </div>
    );
};