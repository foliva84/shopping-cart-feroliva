import React, { useState, useEffect } from 'react'
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const URL_BASE = "https://fakestoreapi.com/products";
    const URL_CAT = `${URL_BASE}/category/${id}`;

    useEffect(() => {

        const getProducts = async () => {
            try {
                const response = await fetch(id ? URL_CAT : URL_BASE);
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        getProducts();
    }, [id]);

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