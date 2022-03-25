import React, {useState, useEffect} from "react";
import './ItemCount.css';


const ItemCount = () =>{
    const [ count, setCount ] = useState(0);
    const addProd = () =>{
        setCount(count +1);
    };

    const removProd = () =>{
        if(count>0){
            setCount(count -1);
        };
    };
    return(
        <div>
            <div className='quantityButtons'>
                <button className='countButton' onClick={addProd}>+</button>
                <button className='countButton' onClick={removProd}>-</button>
            </div>
            <h3>Cantidad: {count}</h3>
        </div>
        
    )
}

export default ItemCount;
