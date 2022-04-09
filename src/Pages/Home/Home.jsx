import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Start from "../../components/Start/Start";
import './Home.css';

const HomePage = () =>{
    return(
        <div className="Inicio">
                <Start/>
                <ItemListContainer greeting="¡Lo ultimo en nuestro Catalogo!"/>
        </div>
    )
};

export default HomePage;