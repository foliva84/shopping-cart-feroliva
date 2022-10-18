import React from 'react';
import Item from "../Item/Item";

const ItemList = ({ products }) => {
    
    return (
        <>
            <div className="row">
                { 
                    products.map(current => <Item key={current.id} product={current}/>)
                }
            </div>
        </>
    )
}

export default ItemList