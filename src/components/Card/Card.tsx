import React, { useState } from 'react';
import { useGetProductByNameQuery } from '../../api/popularAPI';
import { ProductData } from '../../types/productData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo from '../assets/iPhone.png';
import Clases from './Card.module.css';

export default function Card({ name }: { name: string }) {
    const { data, error, isLoading } = useGetProductByNameQuery(name);
    var settings = {
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
    return (
        <div className={Clases.container}>
            {isLoading && <div>Загрузка...</div>}
            {error && <div>Ошибка</div>}

            {data && Array.isArray(data) && (
                <Slider {...settings}>
                    {data.map((item: ProductData, index: number) => (
                        <div key={index} className={Clases.card}>
                            <img src={photo} alt="" />
                            <p>{item.market}</p>
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