import React from 'react';
import Slider from 'react-slick';
import Clases from '../Card/Card.module.css';

interface FilterSliderProps {
    onFilterChange: (name: 'rating' | 'buy' | 'price', by: 'asc' | 'desc') => void;
}

const FilterSlider: React.FC<FilterSliderProps> = ({ onFilterChange }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings} className={Clases.filterButtons}>
            <button  onClick={() => onFilterChange('rating', 'asc')}>По убыванию рейтинга</button>
            <button onClick={() => onFilterChange('rating', 'desc')}>По возрастнию рейтинга</button>
            <button onClick={() => onFilterChange('buy', 'asc')}>По убыванию кол-ва покупок</button>
            <button onClick={() => onFilterChange('buy', 'desc')}>По возврастанию кол-ва покупок</button>
            <button onClick={() => onFilterChange('price', 'asc')}>По убыванию цены</button>
            <button onClick={() => onFilterChange('price', 'desc')}>По возврастанию цены</button>
        </Slider>
    );
};

export default FilterSlider;
