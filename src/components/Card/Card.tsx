import React, { useState } from 'react';
import { useGetProductByNameQuery } from '../../api/popularAPI';
import { ProductData } from '../../types/productData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo from '../assets/iPhone.png';
import Clases from './Card.module.css';
import { useGetMarketplaceQuery } from "../../api/marketplaceAPI";

export default function Card({ name }: { name: string }) {
    const { data, error, isLoading } = useGetProductByNameQuery(name);
    const { data: marketplaceData, isLoading: marketplaceIsLoading, error: marketplaceError } = useGetMarketplaceQuery();

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    if (isLoading || marketplaceIsLoading) return <div>Загрузка...</div>;
    if (error || marketplaceError) return <div>Ошибка</div>;

    return (
        <div className={Clases.container}>
            {data && Array.isArray(data) && marketplaceData && Array.isArray(marketplaceData) && (
                <Slider {...settings}>
                    {data.map((item: ProductData, index: number) => (
                        <div key={index} className={Clases.card}>
                            <img src={photo} alt="" />
                            {marketplaceData.map((market: any) => {
                                if (item.market === market.id) {
                                    return (
                                        <React.Fragment key={market.id}>
                                            <img width='30px' height='15px' src={market.icon} alt={market.name} />
                                            <p>{market.name}</p>
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
                </Slider>
            )}
        </div>
    );
}
