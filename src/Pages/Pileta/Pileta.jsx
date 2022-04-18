import React, {useEffect, useState} from "react";
import Catalog from '../../Catalog';
import Item from "../../components/Item/Item";

const Pileta = () => {
    const [productoCategory, setProductCategory] = useState([]);
    const ProductosCatalog = Catalog;
    let Count = 0;
    console.log(ProductosCatalog);

    useEffect (() =>{
        filterProductByCategory(ProductosCatalog);
    },[Count]);

    const filterProductByCategory = (state) => {
        const products = []
        state.map( (productCat) =>{
            if(productCat.category == "pileta"){
                products.push(productCat)
                Count = Count+1;
            };
        });
        setProductCategory(products)
    };

    return(
        <>
            <div className="ContainerDetail">
                {
                    productoCategory? productoCategory.map((data) => (
                        <Item data= {data}/>
                    )):
                    <div></div>
                }
            </div>
        </>
    ) 
}

export default Pileta;