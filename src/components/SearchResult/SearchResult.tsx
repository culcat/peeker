import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useGetProductByNameQuery } from '../../api/popularAPI';
import { useGetMarketplaceQuery } from "../../api/marketplaceAPI";
import { useSwipeable, SwipeableHandlers } from 'react-swipeable';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clases from '../Card/Card.module.css';
import NOTfound from '../assets/NotFoundLayoutAdaptive.png';
import search from '../assets/SearchLayoutAdaptive.png';
import { useTruncateText } from "../../hooks/useTruncateText";
import Result from './SearchResult.css';

interface SearchResultProps {
    name?: string;
}

export default function SearchResult({ name }: SearchResultProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const searchName = searchParams.get('q') || '';
    const page = parseInt(searchParams.get('page') || '1', 10);
    const filterBy = searchParams.get('filterBy') as 'asc' | 'desc' | null;
    const filterName = searchParams.get('filterName') as 'rating' | 'buy' | 'price' | null;

    const { data, error, isLoading } = useGetProductByNameQuery({ name: searchName, page, filter_by: filterBy, filter_name: filterName });
    const { data: marketplaceData, isLoading: marketplaceIsLoading, error: marketplaceError } = useGetMarketplaceQuery();

    const items = data?.items || [];
    const totalPages = data?.pages || 0;

    const truncateText = useTruncateText();

    const handlePreviousPage = () => {
        if (page > 1) {
            setSearchParams({ q: searchName, page: (page - 1).toString(), filterBy: filterBy || '', filterName: filterName || '' });
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setSearchParams({ q: searchName, page: (page + 1).toString(), filterBy: filterBy || '', filterName: filterName || '' });
        }
    };

    const handleFilterChange = (name: 'rating' | 'buy' | 'price', by: 'asc' | 'desc') => {
        setSearchParams({ q: searchName, page: '1', filterBy: by, filterName: name });
    };

    const swipeHandlers: SwipeableHandlers = useSwipeable({
        onSwipedLeft: handleNextPage,
        onSwipedRight: handlePreviousPage,
        trackMouse: true,
    });

    if (isLoading || marketplaceIsLoading) {
        return (
            <div className={Clases.WarningContainer} >
                <img src={search} alt="Loading" />
            </div>
        );
    }

    if (error || marketplaceError || items.length === 0) {
        return (
            <div className={Clases.WarningContainer}>
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
                {items.map((item) => (
                    <div key={item.item_id} className={Clases.card}>
                        <img className={Clases.mainPhoto} src={item.picture} alt={item.name} />
                        {marketplaceData && marketplaceData.map((market) => {
                            if (item.market === market.id) {
                                return (
                                    <React.Fragment key={market.id}>
                                        <div className={Clases.market}>
                                            <img width='30px' height='20px' src={market.icon} alt={market.data} />
                                            <p>{market.data}</p>
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
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(number => (
                        <span
                            key={number}
                            className={`pagination-number ${number === page ? 'active' : ''}`}
                            onClick={() => setSearchParams({ q: searchName, page: number.toString(), filterBy: filterBy || '', filterName: filterName || '' })}
                        >
                            {number}
                        </span>
                    ))}
                </div>
                <button
                    onClick={handleNextPage}
                    disabled={page === totalPages}
                    className={Result.paginationbutton}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}
