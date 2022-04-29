import React, {useState} from "react";
import { Link } from "react-router-dom";
import './ItemCount.css';

const ItemCount = (props) =>{
    const [quantity, setQuantity] = useState(0);
    function addProd (){
        if (quantity < props.stock){
            setQuantity(quantity + 1);
        }
    };
    
    const removProd = () =>{
        if(quantity > 0){
            setQuantity(quantity - 1);
        };
    };
    
    return(
        <>
        <div className='quantityButtons'>
            <button className='countButton' onClick={removProd}>-</button>
            <h4 style={{color:"black", fontSize:"20px"}}>{quantity}</h4>
            <button className='countButton' onClick={addProd}>+</button>
        </div>
        <div className='quantityButton'>
            <Link to={'/cart'}><button className="buttonAddCart" onClick={() => props.onAdd(quantity)}>Agregar al Carrito</button></Link>
        </div>
        
        </>
    )
}

export default ItemCount;

