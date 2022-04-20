import React, {useState, useEffect, useContext} from "react";
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';
import './ItemDetail.css'
const ItemDetail = ({data}) => {
    const {title, description, image, price, stock, quantity} = data;
    const [quantityCart, setQuantityCart] = useState()
    const {addProductToCart} = useContext(CartContext)
    //funcion del padre ejecutada por el hijo
    const onAdd = (quantity) =>{
        setQuantityCart(quantity)
        console.log(quantityCart)
        addProductToCart(data)
    }
    /////////////////////////////////////////
    return(
        <div className='ProductDetail'>
            <img src= {image} ></img>
            <div className='ProductDetailContent'>
                <h2>{title}</h2>
                <p>{description}</p>
                <h3>Precio: ${price}</h3>
                <h3>Stock Disponible: {stock}</h3>
                <div className="quantities">
                    <ItemCount stock={stock} onAdd={onAdd} quantity={quantity}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;