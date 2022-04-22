import React, {useEffect, useState} from "react";
import Catalog from '../../Catalog';
import Item from "../../components/Item/Item";
const Cava = () => {
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
            if(productCat.category == "cava"){
                products.push(productCat)
                Count = Count+1;
            };
        });
        setProductCategory(products)
    };

    return(
        <>  
            <h3>Nuestra Bodega</h3>
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

export default Cava;