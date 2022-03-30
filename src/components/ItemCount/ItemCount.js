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
        <div>
            <h3>Cant elegida: {count}</h3>
            <div className='quantityButtons'>
                <button className='countButton' onClick={addProd}>+</button>
                <button className='countButton' onClick={removProd}>-</button>
            </div>
        </div>
        
    )
}

export default ItemCount;
