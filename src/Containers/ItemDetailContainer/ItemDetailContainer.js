import React, { useEffect, useState } from 'react'
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    const URL_DETAIL = "https://fakestoreapi.com/products/" + id;

    useEffect(() => {
        const getItem = async () =>{
            try {
                const response = await fetch(URL_DETAIL);
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