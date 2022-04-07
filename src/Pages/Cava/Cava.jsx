import React, {useEffect, useState} from "react";
import Catalog from '../../Catalog';
import Item from "../../components/Item/Item";
const Cava = () => {
    const [productoCategory, setProductCategory] = useState([]);
    const ProductosCatalog = Catalog;
    console.log(ProductosCatalog)

    useEffect (() =>{
        filterProductByCategory(ProductosCatalog);
    }, []);

    const filterProductByCategory = () => {
        return ProductosCatalog.map( (productCat) =>{
            if(productCat.category == "cava"){
                setProductCategory(productCat)
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

export default Cava;