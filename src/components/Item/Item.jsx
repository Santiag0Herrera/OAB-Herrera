import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';
import './Item.css';

export default function Card ({data}){
    const {title, description, image, price, stock, id} = data;
    const {cartProducts, addProductToCart} = useContext(CartContext)
    
    return(
        <div className='Articulos'>
            <h2>{title}</h2>
            <img src= {image} ></img>
            <div className='contenidoArticulos'>
                <h3>${price}</h3>
                <h3>Stock Disponible: {stock}</h3>
                <div class="BuyDetailButtons">
                    <Link to={`/Item/${id}`} style={{textDecoration: 'none'}}><button>Detalles</button></Link>
                </div>
            </div>            
        </div>
    );
};