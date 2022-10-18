import React, { useState, useEffect } from 'react'
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // const onAdd = (count) => {
    //     console.log(`El usuario quiere agregar ${count} productos`);
    // };

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
        .then(res => res.json())
        .then(json => {
            setTimeout(() => {
                setProducts(json);
                setLoading(false);
            }, 2000);
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <>
            <h4>{greeting}</h4>
            <>
                {loading ? <LoadingSpinner /> : <ItemList products={products} />}
            </>
        </>
    )
}

export default ItemListContainer