import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import '../../components/Item/Item.css';
import DeleteIcon from '@mui/icons-material/Delete';

const CartProductCard = ({data}) => {
    const {title, description, image, price, stock, id, quantity} = data;
    const {deletFromCart, cartProducts} = useContext(CartContext)

    const deleteProduct = () => {
        return(
            deletFromCart(data)
        )
    }
    return(
        <>
            {
                cartProducts.lenngth =! 0?
                <div className='Articulos'>
                    <h2>{title}</h2>
                    <img src= {image} ></img>
                    <div className='contenidoArticulos'>
                        <h3>Precio: ${price}</h3>
                        <h3>Cantidad Agregada: {quantity}</h3>
                    </div> 
                    <button className="buttonCart" onClick={deleteProduct}><DeleteIcon/></button>
                </div>:
                <div><h5>NO HAY PRODUCTOS EN TU CARRITO</h5></div>
            }
        </>
    )
}

export default CartProductCard;