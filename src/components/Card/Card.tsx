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
                    <p>{data.name}</p>
                    <p>Цена: {data.price}</p>
                    <p>Маркетплейс: {data.market}</p>
                    <p>Ссылка: {data.url}</p>
                    <p>Гео: {data.geo}</p>
                    <p>Время отгрузки: {data.time_ship}</p></div>))}
                </div>

            )}
        </div>
    );
};