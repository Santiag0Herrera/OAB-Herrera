import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [total, setTotal] = useState(0)
    const getId = (id) => cartProducts.find(e => e.id === id) || null;

    const addProductToCart = (product, quantity) => {
        if(!getId(product.id)){
            product.quantity = quantity
            setCartProducts(cartProducts => [...cartProducts, product])
        }else{
            if(getId(product.id).quantity> getId(product.id).stock)
            return false
            const total = getId(product.id).quantity += quantity
        }
        setTotal (total + quantity)
        return true
    }

    const deletFromCart = (id) => {
        const result = cartProducts.filter(el => parseInt(el.id) != parseInt(id));
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