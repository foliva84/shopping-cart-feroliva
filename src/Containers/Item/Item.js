import React from 'react';

const Item = ({product}) => {
    
    return (
        <>
        
            <li key={product.id}>{product.title}: {product.price}</li>
        </>
    )
}

export default Item