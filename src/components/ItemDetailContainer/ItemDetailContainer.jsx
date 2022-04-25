import React, {useState, useEffect} from "react";
import ItemDetail from '../ItemDetail/ItemDetail';

/////////////// FIREBASE //////////////////////////////////////
import db from '../../firebase'
import { collection, getDocs } from 'firebase/firestore';
///////////////////////////////////////////////////////////////

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
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
            setProducts(productos)
            setLoading(false)
        })
    },[]);

    return(
        <>
            {
                loading ?
                (<div className="spinner"></div>)
                :
                (<div className="ProductDetailList">
                    {products.map((product) => {
                        const {id} = product;
                        return(
                            <ItemDetail data={product} key={id}/>
                        )
                    })}
                </div>)
            }
        </>
    )
}

export default ItemDetailContainer;