import React, { useEffect, useState } from 'react';
import {useNavigate, useLocation, useParams} from 'react-router-dom';
import classes from '../Search/Search.module.css';
import { WhereSearch } from '../WhereSearch/WhereSearch';
import { MoneySort } from '../MoneySort/MoneySort';
import buttonClasses from '../SearchButton/SearchButton.module.css';

export default function SearchBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [search, setSearch] = useState('');
    const name  = useParams();
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const searchTerm = name.name|| '';
        setSearch(searchTerm);
    }, [location.search]);

    const handleSearch = () => {
        if (search) {
            navigate(`/search/${search}/1`);
        }
    };

    return (
        <div className="Main">
            <div className={classes.box}>
                <input
                    placeholder="наименование или ссылка"
                    onChange={(event) => setSearch(event.target.value)}
                    value={search}
                    className={classes.input}
                />
            </div>
            <WhereSearch />
            {/*<MoneySort />*/}
            <div className={classes.box}>
                <button className={buttonClasses.button} onClick={handleSearch}>
                    ПОИСК
                </button>
            </div>
        </div>
    );
}
