import React, {useState} from "react";
import './ItemCount.css';

const ItemCount = (props) =>{
    const [count, setCount] = useState(0);
    const addProd = () =>{
        if (count < props.stock){
            setCount(count +1);
        }
    };

    const removProd = () =>{
        if(count  >0){
            setCount(count -1);
        };
    };


    return(
        <>
        <div className='quantityButtons'>
            <button className='countButton' onClick={removProd}>-</button>
            <h3 style={{color:"black", fontSize:"20px"}}>{count}</h3>
            <button className='countButton' onClick={addProd}>+</button>
        </div>
        <button onClick={() => props.onAdd(count)}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount;

