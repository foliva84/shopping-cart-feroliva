import React, { useEffect, useState } from 'react'
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const id = 10;

    const URL_BASE = "https://fakestoreapi.com/products";
    const URL_DETAIL = `${URL_BASE}/${id}`;

    useEffect(() => {
        const getItem = async () =>{
            try {
                const response = await fetch(URL_DETAIL);
                const data = await response.json();
                setItem(data);
                setLoading(false);
                // console.table(data);
            } catch (error) {
                console.log(error);
            }
        };
        getItem();
    }, []);

    return (
        <>
            {<> { loading ? <LoadingSpinner /> : <ItemDetail item={item} /> }</>}
        </>
    )
}

export default ItemDetailContainer