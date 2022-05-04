import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import home from "../../SVGs/home2.svg" 
import { Link } from "react-router-dom";
import './Home.css';

const HomePage = () =>{
    return(
        <>
        <div className='startImage'>
            <div className='MainTitleContent'>
                <h1>OAB</h1><h2>Tenemos lo que necesitas, y lo que no tambien!</h2>
                <Link to={"/info"}><p>Ver mas información sobre nosotros</p></Link>
            </div>
            <div className='ilustration'>
                <img src={home} className="ilustration"></img>
            </div>
        </div>
            <div className="Inicio">
                <ItemListContainer greeting="¡Lo ultimo en nuestro Catalogo!"/>
            </div>
        </>
    )
};

export default HomePage;