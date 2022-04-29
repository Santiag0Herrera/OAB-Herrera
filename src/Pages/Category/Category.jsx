import React, {useState, useEffect} from 'react';
import '../../Pages/Home/Home.css';
import './Category.css';
import pileta from "../../SVGs/pileta.svg"
import electricos from "../../SVGs/electricos.svg"
import cava from "../../SVGs/cava.svg"
import {useParams} from 'react-router-dom';
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const CategoryPage = () => {
    const { category } = useParams()
    console.log(category)
    return( 
        <>
            <div className='topContent'>
                <div className='startImage'>
                    <div className='MainTitleContent'>
                        <h1>Categoría:</h1><h2 className='subTitle'>"{category}"</h2>
                    </div>
                    {
                        category == "cava"?
                        (
                            <div className='ilustration'>
                                <img src={cava} className="ilustration"></img>
                            </div>
                        )
                        :
                        (
                            category == "pileta"?
                            (
                                <div className='ilustration'>
                                    <img src={pileta} className="ilustration"></img>
                                </div>
                            )
                            :
                            (
                                <div className='ilustration'>
                                    <img src={electricos} className="ilustration"></img>
                                </div>
                            )
                        )
                    }
                </div>
                <div className='arrowStart'><ArrowDownwardIcon/></div>
            </div>

            <div className="Inicio">
                    <ItemListContainer greeting="¡Lo ultimo en nuestro Catalogo!"/>
            </div>
        </>
    )
}

export default CategoryPage;