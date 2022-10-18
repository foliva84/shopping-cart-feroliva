import React from 'react';
import Item from "../Item/Item";

const ItemList = ({ products }) => {
    
    return (
        <>
            <ul>
                { 
                    products.map(current => <Item product={current}/>)
                }
            </ul>
        </>
    )
}

export default ItemList