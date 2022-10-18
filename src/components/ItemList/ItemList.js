import React from 'react';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Item from "../Item/Item";

const ItemList = ({ products, loading }) => {
    
    return (
        <>
            <ul>
                { 
                  loading ? <LoadingSpinner />
                  : products.map(current => <Item product={current}/>)
                }
            </ul>
        </>
    )
}

export default ItemList