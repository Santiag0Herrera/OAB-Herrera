import React, {useState, useEffect} from 'react';
import Card from '../Item/Item';
import Catalog from '../../Catalog';
import './ItemList.css';

const ItemList = () => {  
    const [loading, setLoading] = useState(true)
    //State donde almacenaremos los productos que obtengamos de ItemList (array vacio).
    const [dataProducts, setDataProducts] = useState([]);
    // Promise con useEffect que devuelve los productos de ItemList.
    const getProducts = () => {
        return new Promise ((resolve)=>{
            return setTimeout( ()=>{
                resolve(Catalog)
                setLoading(false)
            }, 1000)
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
            {loading ? //Condicional: condicion "loading" o "loading === 'true' " implica si existe o si su valor es "true"
            (<div className="spinner"></div>)// a ejecutar en caso de verdadera la condicion
            :
            (
            <div className="catalog">
                {dataProducts.map( (product) => {
                    const {id} = product;
                    return(
                        <Card data={product} key={id}/>
                    );
                } )}
            </div>
            )// a ejecutar en caso de falsa la condicion
            }
            
        </div>
    )
}

export default ItemList;