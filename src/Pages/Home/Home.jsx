import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const HomePage = () =>{
    return(
        <>
            <h2>Nuestros Productos!</h2>
            <ItemListContainer greeting="¡Lo ultimo en nuestro Catalogo!"/>
        </>
    )
};

export default HomePage;