 import React from "react";
import ItemCount from "../../Components/ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
    const {title, image, description, price} = item;

    const onAdd = (count) => {
      console.log(`El usuario quiere agregar ${count} productos`);
    };

    return (
       <>
        <div>
          <img alt={title} src={image} />
          <h1>{title}</h1>
          <span>{description}</span>
          <h2>${price}</h2>
        </div>
        <ItemCount initial={1} stock={3} onAdd={ onAdd } />
        </>
      );
}

export default ItemDetail