import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartProductCard from "./cartProducts";
import { Link } from "react-router-dom";
//Style
import './Cart.css';

const Cart = () => {
    const {cartProducts} = useContext(CartContext);
    console.log(cartProducts)
    return(
        <>
            <h3>Tu carrito</h3>
            <div className="cartProducts">
                {
                    cartProducts.map( (cartProduct) => {
                        return(
                            <CartProductCard data={cartProduct}/>
                        )
                    })
                }
            </div>
            <div className='quantityButton'>
                <Link to={'/gracias'}><button className='buttonCart'>Finalizar Compra</button></Link>
                <Link to={'/'}><button className='buttonCart'>+ PRODUCTOS</button></Link>
            </div>
        </>
    )
}

export default Cart;