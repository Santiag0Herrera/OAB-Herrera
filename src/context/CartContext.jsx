import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product) => { //ACA SE PASA EL setCartProduct, ya que es la funcion que modifica el valor del state
        setCartProducts(cartProducts => [...cartProducts, product])
        console.log(cartProducts.length)
    }

    const cartData = { //ACA SE PASA EL addProductToCart, para que sea ejecutada desde un child
        cartProducts,
        addProductToCart
    }
    return(
        <CartContext.Provider value={cartData}>
            {children}
        </CartContext.Provider>

    )
}

export {CartProvider};
export default CartContext;