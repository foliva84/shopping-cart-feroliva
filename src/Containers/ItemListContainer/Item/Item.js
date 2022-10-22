import React from 'react';
import { Link as LinkRRD } from "react-router-dom";

const Item = ({product}) => {
    
    const { image, title, price, id} = product;
    const PATH_DETAIL=`/item/${id}`;
    
    return (
        <>
            <div className="card border-primary mb-3" style={styles.card}>
                <img src={image} className="card-img-top img-fluid" alt={title} />
                <div className="card-body">
                    <p className="card-text">Titulo: {title}</p>
                    <p className="card-text">Precio: ${price}</p>
                </div>
                <LinkRRD to={"/item/" + producto.id}>
                    <button className="btn btn-secondary botonesProductos">Ver Detalles</button>
                </LinkRRD>
            </div>        
        </>
    )
}

const styles = {
    card:{
        width: `18rem`
    }
};

export default Item