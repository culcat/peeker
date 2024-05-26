import React, { useState, useRef } from 'react';
import { useGetMarketplaceQuery } from "../../api/marketplaceAPI";
import { useGetMainQuery } from "../../api/mainAPI";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrow from '../assets/arrow.svg';
import Clases from './Card.module.css';
import { ApiResponse, MainItem } from "../../types/MainItem";

export default function Card() {
    const { data, error, isLoading } = useGetMainQuery();

    const { data: marketplaceData, isLoading: marketplaceIsLoading, error: marketplaceError } = useGetMarketplaceQuery();

    console.log('API data:', data);



    const sliderRef = useRef<Slider>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: currentSlide,
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
        sliderRef.current?.slickNext();
    };

    const previousSlide = () => {
        setCurrentSlide(currentSlide - 1);
        sliderRef.current?.slickPrev();
    };


    if (isLoading || error || !data || !data.items || data.items.length === 0) {
        return <div>{isLoading ? 'Loading...' : error ? 'Error loading data' : 'No items found'}</div>;
    }
    const items: MainItem[] = data.items;

    return (
        <div className={Clases.container}>

                <>
                    <div className={Clases.sliderContainer}>
                        <Slider {...settings} ref={sliderRef}>
                            {items.map((item: MainItem) => (
                                <div key={item.item_id} className={Clases.card}>
                                    <img className={Clases.mainPhoto} src={item.picture} alt=""/>
                                    {marketplaceData && marketplaceData.map((market: any) => {
                                        if (item.market === market.id) {
                                            return (
                                                <React.Fragment key={market.id}>
                                                    <div className={Clases.market}>
                                                        <img width='30px' height='20px' src={market.icon} alt={market.name}/>
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

        </div>
    );
}

