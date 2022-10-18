import React from 'react';

const Item = ({product}) => {
    const { image, title, price} = product;

    return (
        <>
            <div className="card border-primary mb-3" style={styles.card}>
                <img src={image} className="card-img-top img-fluid" alt={title} />
                <div className="card-body">
                    <p className="card-text">Titulo: {title}</p>
                    <p className="card-text">Precio: ${price}</p>
                </div>
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