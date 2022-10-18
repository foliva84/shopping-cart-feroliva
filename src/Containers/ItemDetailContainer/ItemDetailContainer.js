import React, { useEffect, useState } from 'react'
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItem = async () =>{
            try {
                const response = await fetch("https://fakestoreapi.com/products/4");
                const data = await response.json();
                setItem(data);
                setLoading(false);
                
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