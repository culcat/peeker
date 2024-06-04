import React, { useState, useRef } from 'react'; // Добавлен useRef
import { useGetProductByNameQuery } from '../../api/popularAPI';
import { ProductData } from '../../types/productData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo from '../assets/iPhone.png';
import Clases from '../Card/Card.module.css';
import { useGetMarketplaceQuery } from "../../api/marketplaceAPI";
import arrow from '../assets/arrow.svg';
import {useGetMainQuery} from "../../api/mainAPI";
import {MainItem} from "../../types/MainItem";
import NOTfound from '../assets/NotFoundLayoutAdaptive.png';
import search from '../assets/SearchLayoutAdaptive.png';
interface SearchResultProps {
    name: string;
}

export default function SearchResult({ name }: { name: string }) {
    const { data, error, isLoading } = useGetProductByNameQuery(name);
    const { data: marketplaceData, isLoading: marketplaceIsLoading, error: marketplaceError } = useGetMarketplaceQuery();
    const items: ProductData[] = data?.items || [];

    const sliderRef = useRef<Slider>(null); // Создаем ссылку на слайдер



    if (isLoading || marketplaceIsLoading) return <div>
        <img src={search} alt=""/>
    </div>;
    if (error || marketplaceError) return <div>
        <img src={NOTfound} alt=""/>
    </div>;

    return (
        <div className={Clases.container}>

            <>
                <div className={Clases.cardConteiner}>

                        {items.map((item: ProductData) => (
                            <div key={item.item_id} className={Clases.card}>
                                <img className={Clases.mainPhoto} src={item.picture} alt=""/>
                                {marketplaceData && marketplaceData.map((market: any) => {
                                    if (item.market === market.id) {
                                        return (
                                            <React.Fragment key={market.id}>
                                                <div className={Clases.market}>
                                                    <img width='30px' height='20px' src={market.icon}
                                                         alt={market.name}/>
                                                    <p>{market.name}</p>
                                                </div>
                                            </React.Fragment>
                                        );
                                    }
                                    return null;
                                })}
                                <p>{item.name}</p>
                                <p>{item.price} ₽</p>
                                <a href={item.url}>
                                    <button>Перейти</button>
                                </a>
                            </div>
                        ))}
                </div>

            </>

        </div>
    );
}
