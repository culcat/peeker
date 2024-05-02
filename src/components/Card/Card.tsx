import Clases from './Card.module.css';
import React from'react';
import {useGetProductByNameQuery} from "../../api/popularAPI";
import {ProductData} from "../../types/productData";
export default function Card({ name }: { name: string }) {
    const { data, error, isLoading } = useGetProductByNameQuery(name);
    console.log(data)
    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {data && Array.isArray(data) && (

                <div>
                    {data.map((item:ProductData) => (
                        <div >
                            <img src={item.photo} alt=""/>
                            <p>{item.name}</p>
                            <p>Цена: {item.price}</p>
                            <p>Маркетплейс: {item.market}</p>
                            <p>Ссылка: {item.url}</p>
                        </div>
                    ))}
                </div>

            )}
        </div>
    );
};