import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';
import Catalog from "../../Catalog";

const Productos = () => {
    const { id } = useParams(); 
    const [producto, setProduct] = useState();

    console.log("Id de ruta: ", id); //sirve para poder indicarle el Id de que producto queremos la Info, segun el id de la pagina en la que estamos.

    useEffect( () => {
        filterProductById(Catalog)//Que en el ciclo de montaje [] se ejecute "filterProductById()"
    }, []);

    const filterProductById = () =>{
        return Catalog.map( (product)=>{
            if( product.id == id){
                return setProduct(product)
            };
        });
    };
    return(
        <>
            <ItemDetail data={producto}/>
        </>
    );
};

export default Productos;