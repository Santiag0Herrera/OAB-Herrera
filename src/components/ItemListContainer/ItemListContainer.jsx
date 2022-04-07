import React from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = (prop) => {
    const {greeting} = prop;
    return(
        <>  <div className="ProductSection">
                <h3>{greeting}</h3>
            </div>
            <ItemList/>
        </>
    )
}

export default ItemListContainer;