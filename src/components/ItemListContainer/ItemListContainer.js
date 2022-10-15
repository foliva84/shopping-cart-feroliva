import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = ({ greeting }) => {
    const onAdd = (count) => {
        console.log(`El usuario quiere agregar ${count} productos`);
    };

    return (
        <>
            <h4>{greeting}</h4>
            <ItemCount 
                onAdd={onAdd}
                initial={1}
                stock={0}
                />
        </>
    )
}

export default ItemListContainer