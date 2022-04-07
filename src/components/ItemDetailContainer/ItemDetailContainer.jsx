// import React, {useState, useEffect} from "react";
// import ItemDetail from '../ItemDetail/ItemDetail';
// import Catalog from "../../Catalog";

// const ItemDetailContainer = () => {

//     const [productsInfo, setProductsInfo] = useState([]) //useState([]) = array vacio
//     const getProducts = () => {
//             return new Promise ((resolve, reject) => {
//                 setTimeout( ()=>{ return resolve(Catalog);} , 2000);
//         });
//     }
//     useEffect(()=>{
//         getProducts().then((data)=>{
//             setProductsInfo(data);
//         })
//     });

//     return(
//         <div className="ProductDetailList">
//             {productsInfo.map((productInfo) => {
//                 const {id} = productInfo;
//                 return(
//                     <ItemDetail data={productInfo} key={id}/>
//                 )
//             })}
//         </div>
//     )
// }

// export default ItemDetailContainer;