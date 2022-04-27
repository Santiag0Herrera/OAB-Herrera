import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import '../../components/Item/Item.css';
import DeleteIcon from '@mui/icons-material/Delete';

const CartProductCard = ({data}) => {
    const {title, image, price, quantity, description} = data;
    const {deletFromCart} = useContext(CartContext)

    const deleteProduct = () => {
        deletFromCart(data.id)
    }

    return(
        <>
            <div className='ArticulosCart'>
                <img src= {image} className="itemImageCart"></img>
                <div className='cartProductInfo'>
                    <div className="cartDetail">
                        <h2>{title}</h2>
                        <h3>${price} c/u</h3>
                        <h3>Cantidad Agregada: {quantity}</h3>
                        <h3>Subtotal: ${quantity*price}</h3>
                        <p>{description}</p>
                    </div>
                    <button className="buttonCartInfo" onClick={deleteProduct}><DeleteIcon/></button>
                </div> 
            </div>
        </>
    )
}

export default CartProductCard;