import React, {useState, useEffect} from 'react';
import Card from '../Item/Item';
import Catalog from '../../Catalog';
import './ItemList.css';

const ItemList = () => {    
    //State donde almacenaremos los productos que obtengamos de ItemList (array vacio).
    const [dataProducts, setDataProducts] = useState([]);
    // Promise con useEffect que devuelve los productos de ItemList.
    const getProducts = () => {
        return new Promise ((resolve, reject)=>{
            return resolve(Catalog);
        })
    }
    //El useEffect (se ejecuta despues de que se renderiza) llamada a la promesa de "getProducts" y con el ".then" devuelve "data" = obj del array "ItemList".
    useEffect( () => {
        getProducts().then((data)=>{
                setDataProducts(data) //la guarda en el state de productos "setDataProducts" que es la funcion que se ejecuta para modificar el state vacio, con la respuesta de la promesa (los productos del array).
            }
        );
    },);
    //como modificamos un state, el return se vuelve a renderizar ya con el "{console.log("Products: ", dataProducts)}" lleno con los objetos del array ItemList.
    return(
        <div className='productList'>
            <div className="catalog">
                {dataProducts.map( (product) => {
                    const {id} = product;
                    return(
                        <Card data={product} key={id}/>
                    );
                } )}
            </div>
        </div>
    )
}

export default ItemList;