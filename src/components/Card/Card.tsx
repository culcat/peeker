import React, { useState, useRef } from 'react'; // Добавлен useRef
import { useGetProductByNameQuery } from '../../api/popularAPI';
import { ProductData } from '../../types/productData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo from '../assets/iPhone.png';
import Clases from './Card.module.css';
import { useGetMarketplaceQuery } from "../../api/marketplaceAPI";
import arrow from '../assets/arrow.svg';

export default function Card({ name }: { name: string }) {
    const { data, error, isLoading } = useGetProductByNameQuery(name);
    const { data: marketplaceData, isLoading: marketplaceIsLoading, error: marketplaceError } = useGetMarketplaceQuery();

    const sliderRef = useRef<Slider>(null); // Создаем ссылку на слайдер

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: currentSlide, // Устанавливаем initialSlide
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: false
                }
            }
        ]
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide + 1);
        sliderRef.current?.slickNext(); // Пролистываем на следующий слайд
    };

    const previousSlide = () => {
        setCurrentSlide(currentSlide - 1);
        sliderRef.current?.slickPrev(); // Пролистываем на предыдущий слайд
    };

    if (isLoading || marketplaceIsLoading) return <div>Загрузка...</div>;
    if (error || marketplaceError) return <div>Ошибка</div>;

    return (
        <div className={Clases.container}>
            {data && Array.isArray(data) && marketplaceData && Array.isArray(marketplaceData) && (
                <>
                    <div className={Clases.sliderContainer}>
                        <Slider {...settings} ref={sliderRef}> {/* Добавляем ссылку на слайдер */}
                            {data.map((item: ProductData, index: number) => (
                                <div key={index} className={Clases.card}>
                                    <img className={Clases.mainPhoto} src={photo} alt=""/>
                                    {marketplaceData.map((market: any) => {
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
                        </Slider>
                    </div>
                    <div className={Clases.arrowsContainer}>
                        <img onClick={previousSlide} src={arrow} className={Clases.arrowLeft}/>
                        <img onClick={nextSlide} src={arrow} className={Clases.arrowRight}/>
                    </div>
                </>
            )}
        </div>
    );
}
