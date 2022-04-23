import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [subTotal, setSubTotal] = useState(0)
    const [total , setTotal] = useState(0)
    const getId = (id) => cartProducts.find(e => e.id === id) || null; //si en el array cartProducts se encuentra un e que tenga un id igual que el id, entonces null para no dejar que se agregue al carrito dos veces.

    const addProductToCart = (product, quantity) => {
        if(!getId(product.id)){
            product.quantity = quantity
            setCartProducts(cartProducts => [...cartProducts, product])
        }else{
            if(getId(product.id).quantity> getId(product.id).stock)
            return false
            const total = getId(product.id).quantity += quantity
        }
        setSubTotal (subTotal + quantity)
        return true
    }

    const deletFromCart = (id) => { 
        setCartProducts(cartProducts.filter(el => parseInt(el.id) != parseInt(id)))
    } 

    const clear = () => {
        setCartProducts([])
    }

    const totalCartItem = () =>{
        let total = 0
        cartProducts.map((cartProduct)=>{
            total = (cartProduct.price * cartProduct.quantity) + total
        })
        return total
    }

    const cartData = {
        cartProducts,
        addProductToCart,
        deletFromCart,
        totalCartItem,
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