import React, {useState, useEffect} from 'react';
import Card from '../Item/Item';

/////////////// FIREBASE //////////////////////////////////////
import db from '../../firebase'
import { collection, getDocs } from 'firebase/firestore';
///////////////////////////////////////////////////////////////
import './ItemList.css';

const ItemList = () => {  
    const [loading, setLoading] = useState(true)
    //State donde almacenaremos los productos que obtengamos de ItemList (array vacio).
    const [products, setProducts] = useState([]);
    // Promise con useEffect que devuelve los productos de ItemList.
    const getProducts = async () => {
        const itemsCollection = collection(db, 'Catalog');
        const productosSnapshot = await getDocs(itemsCollection);
        const productList = productosSnapshot.docs.map( (doc) => {
                let product = doc.data()
                product.id = doc.id
                console.log(product)
                return product
            }
        )
        return productList
    }

    useEffect( () => {
        setLoading(true)
        getProducts().then( (productos) => {
                setProducts(productos) //la guarda en el state de productos "setDataProducts" que es la funcion que se ejecuta para modificar el state vacio, con la respuesta de la promesa (los productos del array).
                setLoading(false)
        });
    },[]);
    //como modificamos un state, el return se vuelve a renderizar ya con el "{console.log("Products: ", dataProducts)}" lleno con los objetos del array ItemList.
    return(
        <div className='productList'>
            {
                loading ? //Condicional: condicion "loading" o "loading === 'true' " implica si existe o si su valor es "true"
                (<div className="spinner"></div>)// a ejecutar en caso de verdadera la condicion
                :
                (
                <div className="catalog">
                    {products.map((product) => {
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