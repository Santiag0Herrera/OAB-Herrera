import React, {useState, useEffect} from 'react';
import Card from '../Item/Item';

/////////////// FIREBASE //////////////////////////////////////
import db from '../../firebase'
import { collection, getDocs } from 'firebase/firestore';
///////////////////////////////////////////////////////////////
import './ItemList.css';
import { useParams } from 'react-router-dom';

const ItemList = ({children}) => {  
    const { category } = useParams()

    const [loading, setLoading] = useState(true)

    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const itemsCollection = collection(db, 'Catalog');
        const productosSnapshot = await getDocs(itemsCollection);
        const productList = productosSnapshot.docs.map( (doc) => {
                let product = doc.data()
                product.id = doc.id
                return product
            }
        )
        return productList
    }

    useEffect( () => {
        setProducts([])
        setLoading(true)
        console.log(category)
        getProducts().then( (productos) => {
                setLoading(false)
                console.log(productos)
                category ? filterProductByCategory(productos, category) : setProducts(productos)
        })
    },[category]);

    const filterProductByCategory = (array, category) => {
        return array.map ((product, i) => {
            if(product.category === category) {
                return setProducts(products => [...products, product])
            }
        })
    }

    //como modificamos un state, el return se vuelve a renderizar ya con el "{console.log("Products: ", dataProducts)}" lleno con los objetos del array ItemList.
    return(
        <div className='productList'>
            {
                loading ? //Condicional: condicion "loading" o "loading === 'true' " implica si existe o si su valor es "true"
                (<div className="spinner"></div>)// a ejecutar en caso de verdadera la condicion
                :
                (<div className="catalog"> {products.map((product) => <Card data={product} key={product.id} />)}</div>)// a ejecutar en caso de falsa la condicion
            }
        </div>
    )
}

export default ItemList;