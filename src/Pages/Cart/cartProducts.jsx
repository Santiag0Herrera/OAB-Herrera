import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import '../../components/Item/Item.css';
import DeleteIcon from '@mui/icons-material/Delete';

const CartProductCard = ({data}) => {
    const {title, image, price, quantity} = data;
    const {deletFromCart} = useContext(CartContext)
    let subTotal = 0

    const deleteProduct = () => {
        deletFromCart(data.id)
    }

    return(
        <>
            <div className='ArticulosCart'>
                <h2>{title}</h2>
                <img src= {image} className="itemImage"></img>
                <div className='contenidoArticulos'>
                    <h3>Precio: ${price}</h3>
                    <h3>Cantidad Agregada: {quantity}</h3>
                    <h3>Subtotal: ${subTotal}</h3>
                </div> 
                <button className="buttonCart" onClick={deleteProduct}><DeleteIcon/></button>
            </div>
        </>
    )
}

export default CartProductCard;