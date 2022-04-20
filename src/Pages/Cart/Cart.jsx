import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartProductCard from "./cartProducts";
import { Link } from "react-router-dom";
//Style
import './Cart.css';

const Cart = () => {
    const {cartProducts, clear} = useContext(CartContext);
    console.log(cartProducts)
    return(
        <>  <h3>Tu carrito</h3>
            {
                cartProducts.length === 0
                ?(<>
                    <div className='quantityButton'>
                        <h4 style={{color: "white"}}>Tu carrito esta vacio</h4>
                        <Link to={'/'}><button className='buttonCart'>+ PRODUCTOS</button></Link>
                    </div>
                    
                </>)
                :(<>
                    <div className="cartProducts">
                    {
                        cartProducts.map( (cartProduct) => {
                            return(
                                <CartProductCard data={cartProduct} key={cartProduct.id}/>
                            )
                        })
                    }
                    </div>
                    <div className='quantityButton'>
                        <Link to={'/gracias'}><button className='buttonCart'>Finalizar Compra</button></Link>
                        <Link to={'/'}><button className='buttonCart'>+ PRODUCTOS</button></Link>
                        <button className='buttonCart' onClick={clear}>Vaciar Carrito</button>
                    </div>
                </>)
            }
        </>
    )
}

export default Cart;