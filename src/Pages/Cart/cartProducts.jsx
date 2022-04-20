import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../context/CartContext";
import '../../components/Item/Item.css';
import DeleteIcon from '@mui/icons-material/Delete';

const CartProductCard = ({data}) => {
    const {title, image, price, quantity} = data;
    const {deletFromCart} = useContext(CartContext)

    const deleteProduct = () => {
        deletFromCart()
    }

    return(
        <>
            <div className='Articulos'>
                <h2>{title}</h2>
                <img src= {image} ></img>
                <div className='contenidoArticulos'>
                    <h3>Precio: ${price}</h3>
                    <h3>Cantidad Agregada: {quantity}</h3>
                </div> 
                <button className="buttonCart" onClick={deleteProduct}><DeleteIcon/></button>
            </div>
        </>
    )
}

export default CartProductCard;