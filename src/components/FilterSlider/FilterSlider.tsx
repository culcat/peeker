import React, {useState} from 'react';
import Slider from 'react-slick';
import Clases from '../Card/Card.module.css';

interface FilterSliderProps {
    onFilterChange: (name: 'rating' | 'buy' | 'price', by: 'asc' | 'desc') => void;
}

const FilterSlider: React.FC<FilterSliderProps> = ({ onFilterChange }) => {
    const [activeButton, setActiveButton] = useState<{name: string, by: string} | null>(null);
    const handleButtonClick = (name: 'rating' | 'buy' | 'price', by: 'asc' | 'desc') => {
        setActiveButton({ name, by });
        onFilterChange(name, by);
    };
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
    const isActive = (name: 'rating' | 'buy' | 'price', by: 'asc' | 'desc') =>
        activeButton?.name === name && activeButton?.by === by;
    return (
        <Slider {...settings} className={Clases.filterButtons}>
            <button
                onClick={() => handleButtonClick('rating', 'asc')}
                className={isActive('rating', 'asc') ? Clases.active : ''}
            >
                По убыванию рейтинга
            </button>
            <button
                onClick={() => handleButtonClick('rating', 'desc')}
                className={isActive('rating', 'desc') ? Clases.active : ''}
            >
                По возрастнию рейтинга
            </button>
            <button
                onClick={() => handleButtonClick('buy', 'asc')}
                className={isActive('buy', 'asc') ? Clases.active : ''}
            >
                По убыванию кол-ва покупок
            </button>
            <button
                onClick={() => handleButtonClick('buy', 'desc')}
                className={isActive('buy', 'desc') ? Clases.active : ''}
            >
                По возврастанию кол-ва покупок
            </button>
            <button
                onClick={() => handleButtonClick('price', 'asc')}
                className={isActive('price', 'asc') ? Clases.active : ''}
            >
                По убыванию цены
            </button>
            <button
                onClick={() => handleButtonClick('price', 'desc')}
                className={isActive('price', 'desc') ? Clases.active : ''}
            >
                По возврастанию цены
            </button>
        </Slider>
    );

};

export default FilterSlider;
