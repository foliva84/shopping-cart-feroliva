import React, { useState }from 'react';
import { Link as LinkRRD } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    const [finalizarCompra, setFinalizarCompra] = useState(false);

    const substract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const add = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const addToCart = () => {
        setFinalizarCompra(true);
        onAdd(count);
    };

    return (
        <>
            {
                (!finalizarCompra ? 
                    (
                        <>
                        <button onClick={substract}>-</button>
                        <h2>{count}</h2>
                        <button onClick={add}>+</button>                        
                        <button disabled={ stock === 0 } onClick={ () => addToCart() }>
                            <span>{ stock === 0 ? "No hay stock" : "Agregar al carrito" }</span>
                        </button>
                        </>
                    ): 
                        <LinkRRD to={"/cart/"}>
                            <button className="btn btn-secondary botonesProductos">Finalizar Compra</button>
                        </LinkRRD>        
                    )
            }
            {/* // <button disabled={ stock === 0 } onClick={ () => addToCart() }>
            //     <span>{ stock === 0 ? "No hay stock" : "Agregar al carrito" }</span>
            // </button> */}
        </>
    )
}

export default ItemCount