import React, {useState, useEffect} from "react";
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
const ItemDetail = ({data},countAct) => {
    const {title, description, image, price, stock} = data;
    // const [count, setCount] = useState(0)

    // useEffect(()=>{
    //     setCount(countAct)
    // })
    
    return(
        <>
        <div className='ProductDetail'>
            <img src= {image} ></img>
            <div className='ProductDetailContent'>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <h3>Precio: ${price}</h3>
                    <h3>Stock Disponible: {stock}</h3>
                    {/* <h3>Cantitad Agregada: {count}</h3> */}
                    
                </div>
                <div className="buttonsSection">
                    <ItemCount stock={stock}/>
                    <button className="buyButton">Comprar</button>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default ItemDetail;