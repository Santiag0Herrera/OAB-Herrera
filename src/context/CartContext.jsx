import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product) => {
        setCartProducts(cartProducts => [...cartProducts, product])
    }

    const deletFromCart = () => {
        setCartProducts(cartProducts.filter((product) => product.id !== 1))
    }

    const cartData = {
        cartProducts,
        addProductToCart,
        deletFromCart
    }
    return(
        <CartContext.Provider value={cartData}>
            {children}
        </CartContext.Provider>

    )
}

export {CartProvider};
export default CartContext;