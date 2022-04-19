import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';
import Catalog from "../../Catalog";

const Productos = () => {
    const {id} = useParams(); 
    const [producto, setProduct] = useState([]);
    const ProductosCatalog = Catalog;
    // console.log("Id de ruta: ", id); //sirve para poder indicarle el Id de que producto queremos la Info, segun el id de la pagina en la que estamos.

    useEffect( () => {
        filterProductById(ProductosCatalog)//Que en el ciclo de montaje [] se ejecute "filterProductById()"
    }, [id]);

    const filterProductById = () =>{
        return ProductosCatalog.map( (product)=>{
            if( product.id == id){
                setProduct(product)
            };
        });
    };
    return(
        <>
        <div className="ContainerDetail">
            <ItemDetail data={producto}/>
        </div>
            
        </>
    );
};

export default Productos;