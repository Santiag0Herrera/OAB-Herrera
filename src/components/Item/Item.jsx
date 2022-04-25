import React from 'react';
import {Link} from 'react-router-dom';
import './Item.css';

export default function Card ({data}){
    const {title, image, price, stock, id} = data;

    return(
        <>
            <div className='Articulos'>
                <h2>{title}</h2>
                <img src= {image} className="itemImage"></img>
                <div className='contenidoArticulos'>
                    <h3>${price}</h3>
                    <h3>Stock Disponible: {stock}</h3>
                    <div className="BuyDetailButtons">
                        <Link to={`/Item/${id}`} style={{textDecoration: 'none'}}><button className="buttonItem">Detalles</button></Link>
                    </div>
                </div>            
            </div>
        </>
    );
};