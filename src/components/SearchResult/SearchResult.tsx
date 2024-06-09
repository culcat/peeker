import React, { useState } from 'react';
import { useGetProductByNameQuery } from '../../api/popularAPI';
import { ProductData } from '../../types/productData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clases from '../Card/Card.module.css';
import { useGetMarketplaceQuery } from "../../api/marketplaceAPI";
import { useSwipeable, SwipeableHandlers } from 'react-swipeable';
import arrow from '../assets/arrow.svg';
import NOTfound from '../assets/NotFoundLayoutAdaptive.png';
import search from '../assets/SearchLayoutAdaptive.png';
import { useTruncateText } from "../../hooks/useTruncateText";
import Result from './SearchResult.css';

interface SearchResultProps {
    name: string;
}

export default function SearchResult({ name }: SearchResultProps) {
    const [page, setPage] = useState(1);
    const [filterBy, setFilterBy] = useState<'asc' | 'desc' | null>(null);
    const [filterName, setFilterName] = useState<'rating' | 'buy' | 'price' | null>(null);
    const { data, error, isLoading } = useGetProductByNameQuery({ name, page, filter_by: filterBy, filter_name: filterName });
    const { data: marketplaceData, isLoading: marketplaceIsLoading, error: marketplaceError } = useGetMarketplaceQuery();

    const items: ProductData[] = data?.items || [];
    const totalPages = data?.pages || 0;

    const pageNumbers: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    const truncateText = useTruncateText();

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handleFilterChange = (name: 'rating' | 'buy' | 'price', by: 'asc' | 'desc') => {
        setFilterName(name);
        setFilterBy(by);
    };

    const swipeHandlers: SwipeableHandlers = useSwipeable({
        onSwipedLeft: () => handleNextPage(),
        onSwipedRight: () => handlePreviousPage(),
        trackMouse: true,
    });

    if (isLoading || marketplaceIsLoading) {
        return (
            <div>
                <img src={search} alt="Loading" />
            </div>
        );
    }

    if (error || marketplaceError) {
        return (
            <div>
                <img src={NOTfound} alt="Not Found" />
            </div>
        );
    }

    return (
        <div className={Clases.container}>
            <div className={Clases.filterbuttonscontainer} {...swipeHandlers}>
                <div className={Clases.filterButtons}>
                    <button onClick={() => handleFilterChange('rating', 'asc')}>По убыванию рейтинга</button>
                    <button onClick={() => handleFilterChange('rating', 'desc')}>По возрастнию рейтинга</button>
                    <button onClick={() => handleFilterChange('buy', 'asc')}>По убыванию кол-ва покупок</button>
                    <button onClick={() => handleFilterChange('buy', 'desc')}>По возврастанию кол-ва покупок</button>
                    <button onClick={() => handleFilterChange('price', 'asc')}>По убыванию цены</button>
                    <button onClick={() => handleFilterChange('price', 'desc')}>По возврастанию цены</button>
                </div>
            </div>
            <div className={Clases.cardConteiner}>
                {items.map((item: ProductData) => (
                    <div key={item.item_id} className={Clases.card}>
                        <img className={Clases.mainPhoto} src={item.picture} alt={item.name}/>
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
                        <p>{truncateText(item.name, 40)}</p>
                        <p className={Clases.rating}>{item.rating} ({item.review_count})</p>
                        <p>{item.price} ₽</p>
                        <a target="_blank" rel="noopener noreferrer" href={item.url}>
                            <button>Перейти</button>
                        </a>
                    </div>
                ))}
            </div>
            <div className="pagination-wrapper">
                <button
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                    className={Result.paginationbutton}
                >
                    &lt;
                </button>
                <div className="pagination-numbers">
                    {pageNumbers.map(number => (
                        <span
                            key={number}
                            className={`pagination-number ${number === page ? 'active' : ''}`}
                            onClick={() => setPage(number)}
                        >
                {number}
            </span>
                    ))}
                </div>
                <button
                    onClick={handleNextPage}
                    disabled={page === totalPages + 1}
                    className={Result.paginationbutton}
                >
                    &gt;
                </button>
            </div>

        </div>
    );
}
