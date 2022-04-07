import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import './Home.css';

const HomePage = () =>{
    return(
        <>
            <div className="ProductSection">
                <h2>Nuestros Productos!</h2>
            </div>
                <ItemListContainer greeting="¡Lo ultimo en nuestro Catalogo!"/>
        </>
    )
};

export default HomePage;