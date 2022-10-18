import React from 'react'

const ItemDetail = ({ item }) => {
    const {title, image, description, price} = item;

    return (
        <div>
          <img alt={title} src={image} />
          <h1>{title}</h1>
          <span>{description}</span>
          <h2>{price}</h2>
        </div>
      );
}

export default ItemDetail