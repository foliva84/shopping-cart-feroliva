 import React, { useState } from "react";
import ItemCount from "../../Components/ItemCount/ItemCount";
import { Link as LinkRRD } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const {title, image, description, price} = item;
    const [showItemCount, setShowItemCount] = useState(true);

    const onAdd = (count) => {      
      console.log(`El usuario quiere agregar ${count} productos`);
      setShowItemCount(false);
    };

    return (
       <>
        <div>
          <img alt={title} src={image} />
          <h1>{title}</h1>
          <span>{description}</span>
          <h2>${price}</h2>
        </div>
        {
          showItemCount ? (
            <ItemCount initial={1} stock={3} onAdd={ onAdd } />
          ) : (
            <LinkRRD to={"/cart/"}>
              <button className="btn btn-secondary botonesProductos">Finalizar Compra</button>
            </LinkRRD>
          )
        }
        </>
      );
}

export default ItemDetail