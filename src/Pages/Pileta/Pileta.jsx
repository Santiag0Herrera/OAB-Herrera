import React, {useEffect, useState} from "react";
import Item from "../../components/Item/Item";

/////////////// FIREBASE //////////////////////////////////////
import db from '../../firebase'
import { collection, getDocs } from 'firebase/firestore';
///////////////////////////////////////////////////////////////

const Pileta = () => {
    const [productoCategory, setProductCategory] = useState([]);
    // const ProductosCatalog = products;
    let Count = 0;
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

    useEffect (() =>{
        filterProductByCategory(products);
    },[Count]);

    const filterProductByCategory = (state) => {
        const productosFilt = []
        state.map( (productCat) =>{
            if(productCat.category == "pileta"){
                productosFilt.push(productCat)
                Count = Count+1;
            };
        });
        setProductCategory(productosFilt)
    };

    return(
        <>
        <h3>Productos para la Pileta</h3>
            {   loading ?
                (<div className="spinner"></div>)
                :
                (<div className="ContainerDetail">
                    {
                        productoCategory? (productoCategory.map((data) => (
                            <Item data={data} key={data.id}/>
                        ))):
                        (<></>)
                    }
                </div>)
            }
        </>
    ) 
}

export default Pileta;