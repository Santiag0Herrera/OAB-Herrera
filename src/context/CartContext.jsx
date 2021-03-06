import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [total , setTotal] = useState(0)
    const getId = (id) => cartProducts.find(e => e.id === id) || null; //si en el array cartProducts se encuentra un e que tenga un id igual que el id, entonces null para no dejar que se agregue al carrito dos veces.

    const addProductToCart = (product, quantity) => {
        if(!getId(product.id)){
            setTotal(total + (product.price*quantity))
            product.quantity = quantity
            setCartProducts(cartProducts => [...cartProducts, product])
        }else{
            if(getId(product.id).quantity> getId(product.id).stock)
            return false
            const total = getId(product.id).quantity += quantity
        }
        return true
    }

    const deletFromCart = (id) => { 
        setCartProducts(cartProducts.filter(el => parseInt(el.id) != parseInt(id)))
    } 

    const clear = () => {
        setCartProducts([])
        setTotal(0)
    }

    const cartData = {
        cartProducts,
        addProductToCart,
        deletFromCart,
        total,
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