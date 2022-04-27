import React, {useState, useEffect} from 'react';
import Card from '../Item/Item';

/////////////// FIREBASE //////////////////////////////////////
import db from '../../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore';
///////////////////////////////////////////////////////////////

import './ItemList.css';
import { useParams } from 'react-router-dom';

const ItemList = () => {  
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
        getProducts().then( (productos) => {
                setLoading(false)
                category ? filterProductByCategory(productos, category) : setProducts(productos)
        })
    },[category]);

    ////////////////FILTRADO CON FIREBASE//////////////////
    //para que directamente firebase nos traiga los productos filtrados, podemos usar: const itemsCollection = query(collection(db, 'Catalog'), where("category", "==", "electricos" )); y treaerá todos los productos que tengan la propiedad "category" == a "electricos".
    //////////////////////////////////////////////////////
    const filterProductByCategory = (array, category) => {
        return array.map ((product, i) => {
            if(product.category === category) {
                return setProducts(products => [...products, product])
            }
        })
    }
    return(
        <div className='productList'>
            {
                loading ?
                (<div className="spinner"></div>)
                :
                (<div className="catalog"> {products.map((product) => <Card data={product} key={product.id} />)}</div>)
            }
        </div>
    )
}

export default ItemList;