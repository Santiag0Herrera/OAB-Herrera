import React from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = (prop) => {
    const {greeting} = prop;
    return(
        <>
            <h3>{greeting}</h3>
            <ItemList/>
        </>
    )
}

export default ItemListContainer;