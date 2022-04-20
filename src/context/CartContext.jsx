import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product, quantity) => {
        setCartProducts(cartProducts => [...cartProducts, product])
        console.log(product.quantity)
    }

    const deletFromCart = (id) => {
        const result = cartProducts.slice(el => el.id !== parseInt(id));
        setCartProducts(result)
    }

    const clear = () => {
        setCartProducts([])
    }

    const cartData = {
        cartProducts,
        addProductToCart,
        deletFromCart,
        clear
    }
    return(
        <CartContext.Provider value={cartData}>
            {children}
        </CartContext.Provider>

    )
}

export {CartProvider};
export default CartContext;