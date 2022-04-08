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
                <h3>{count}</h3>
                <button className='countButton' onClick={addProd}>+</button>
            </div>
        </>
        
    )
}

export default ItemCount;

//intento de Evento
// import React, {useState} from "react";
// import './ItemCount.css';

// const ItemCount = (props, count) =>{
    
//     const addProd = (countAct) =>{
//         if (count < props.stock){
//             countAct = count+1
//         }
//     };

//     const removProd = (countAct) =>{
//         if(count > 0){
//             countAct = count-1
//         };
//     };


//     return(
//         <>
//             <div className='quantityButtons'>
//                 <button className='countButton' onClick={removProd} action={countAct}>-</button>
//                 <h3>{count}</h3>
//                 <button className='countButton' onClick={addProd} action={countAct}>+</button>
//             </div>
//         </>
        
//     )
// }

// export default ItemCount;

