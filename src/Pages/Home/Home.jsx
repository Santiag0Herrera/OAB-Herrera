import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import './Home.css';

const HomePage = () =>{
    return(
        <>
            <div className="Inicio">
                <ItemListContainer greeting="¡Lo ultimo en nuestro Catalogo!"/>
            </div>
        </>
    )
};

export default HomePage;