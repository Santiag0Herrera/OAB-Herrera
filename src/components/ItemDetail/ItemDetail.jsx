import React, {useState, useEffect} from "react";
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import './ItemDetail.css'
const ItemDetail = ({data},countAct) => {
    const {title, description, image, price, stock} = data;
    const [cart, setCart] = useState({});

    //funcion del padre ejecutada por el hijo
    const onAdd= () =>{
        setCart(data);
    }
    /////////////////////////////////////////
    return(
        <div className='ProductDetail'>
            <img src= {image} ></img>
            <div className='ProductDetailContent'>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <h3>Precio: ${price}</h3>
                    <h3>Stock Disponible: {stock}</h3>
                    <div>
                        { //condicional 
                            cart.id?
                            <div className='quantities'>
                                <Link to={`/cart`}><button>Finalizar Compra</button></Link>
                            </div>:
                            <div className="quantities">
                                <ItemCount stock={stock} onAdd={onAdd}/>
                            </div>
                            //////////
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;