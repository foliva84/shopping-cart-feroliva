import React from 'react';
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import Item from "../Item/Item";

const ItemList = ({ products, loading }) => {
    
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