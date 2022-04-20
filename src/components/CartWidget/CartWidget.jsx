import React, {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../../context/CartContext';

const CartWidget = () =>{
    const {cartProducts, addProductToCart} = useContext(CartContext)
    return(
        <div>
            <li><ShoppingCartIcon fontSize='medium'/><p>{cartProducts.length}</p></li>
        </div>
    )
}

export default CartWidget;