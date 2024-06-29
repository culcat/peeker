import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetProductByNameQuery } from '../../api/popularAPI';
import { useGetMarketplaceQuery } from "../../api/marketplaceAPI";
import { useSwipeable, SwipeableHandlers } from 'react-swipeable';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clases from '../Card/Card.module.css';
import arrow from '../assets/arrow.svg';
import NOTfound from '../assets/NotFoundLayoutAdaptive.png';
import search from '../assets/SearchLayoutAdaptive.png';
import { useTruncateText } from "../../hooks/useTruncateText";
import './SearchResult.css';
import FilterSlider from "../FilterSlider/FilterSlider";

interface SearchResultProps {
    name?: string;
}

export default function SearchResult({ name }: SearchResultProps) {
    const { name: paramName, page: paramPage } = useParams<{ name: string; page: string }>();
    const navigate = useNavigate();

    const [filterBy, setFilterBy] = useState<'asc' | 'desc' | null>(null);
    const [filterName, setFilterName] = useState<'rating' | 'buy' | 'price' | null>(null);

    const page = parseInt(paramPage || '1', 10);
    const searchName = name || paramName || '';

    const { data, error, isLoading } = useGetProductByNameQuery({ name: searchName, page, filter_by: filterBy, filter_name: filterName });
    const { data: marketplaceData, isLoading: marketplaceIsLoading, error: marketplaceError } = useGetMarketplaceQuery();

    const items = data?.items || [];
    const totalPages = data?.pages || 0;

    const truncateText = useTruncateText();

    const handlePreviousPage = () => {
        if (page > 1) {
            navigate(`/search/${searchName}/${page - 1}`);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            navigate(`/search/${searchName}/${page + 1}`);
        }
    };

    const handleFilterChange = (name: 'rating' | 'buy' | 'price', by: 'asc' | 'desc') => {
        setFilterName(name);
        setFilterBy(by);
        navigate(`/search/${searchName}/1`);
    };

    const swipeHandlers: SwipeableHandlers = useSwipeable({
        onSwipedLeft: handleNextPage,
        onSwipedRight: handlePreviousPage,
        trackMouse: true,
    });

    const renderPageNumbers = () => {
        const pageNumbers = [];

        if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <span
                        key={i}
                        className={`paginationNumber ${i === page ? 'active' : ''}`}
                        onClick={() => navigate(`/search/${searchName}/${i}`)}
                    >
                        {i}
                    </span>
                );
            }
        } else {
            for (let i = 1; i <= 5; i++) {
                pageNumbers.push(
                    <span
                        key={i}
                        className={`paginationNumber ${i === page ? 'active' : ''}`}
                        onClick={() => navigate(`/search/${searchName}/${i}`)}
                    >
                        {i}
                    </span>
                );
            }

            if (page >= 5 && page <= totalPages - 1) {
                pageNumbers.push(<span key="dots" className="paginationDots">...</span>);
            }

            pageNumbers.push(
                <span
                    key={totalPages}
                    className={`paginationNumber ${totalPages === page ? 'active' : ''}`}
                    onClick={() => navigate(`/search/${searchName}/${totalPages}`)}
                >
                    {totalPages}
                </span>
            );
        }

        return pageNumbers;
    };

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
            <div className={Clases.filterbuttonscontainer}>
                <FilterSlider onFilterChange={handleFilterChange}/>
            </div>
            <div className={Clases.cardConteiner}>
                {items.map((item) => (
                    <div key={item.item_id} className={Clases.card}>
                        <img className={Clases.mainPhoto} src={item.picture} alt={item.name}/>
                        {marketplaceData && marketplaceData.map((market) => {
                            if (item.market === market.id) {
                                return (
                                    <React.Fragment key={market.id}>
                                        <div className={Clases.market}>
                                            <img width='30px' height='20px' src={market.icon} alt={market.data}/>
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
            <div className="paginationWrapper">
                <button
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                    className="paginationButton"
                >
                    &lt;
                </button>
                <div className="paginationNumbers">
                    {renderPageNumbers()}
                </div>
                <button
                    onClick={handleNextPage}
                    disabled={page === totalPages}
                    className="paginationButton"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}
