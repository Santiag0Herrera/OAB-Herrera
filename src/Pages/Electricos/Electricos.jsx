import React, {useEffect, useState} from "react";
import Catalog from '../../Catalog';
import Item from "../../components/Item/Item";

const Electricos = () => {
    const [productoCategory, setProductCategory] = useState([]);
    const ProductosCatalog = Catalog;
    let Count = 0;
    console.log(ProductosCatalog);

    useEffect (() =>{
        filterProductByCategory(ProductosCatalog);
    },[Count]);

    const filterProductByCategory = () => {
        return ProductosCatalog.map( (productCat) =>{
            if(productCat.category == "electricos"){
                setProductCategory(productCat)
                Count = Count+1;
            };
        });
    };

    return(
        <>
            <div className="ContainerDetail">
                <Item data={productoCategory}/>
            </div>
        </>
    )
}

export default Electricos;