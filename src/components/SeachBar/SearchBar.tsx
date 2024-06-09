import classes from "../Search/Search.module.css";
import {WhereSearch} from "../WhereSearch/WhereSearch";
import {MoneySort} from "../MoneySort/MoneySort";
import clases from "../SearchButton/SearchButton.module.css";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function SearchBar(){
    const history = useNavigate();
    const [search, setSearch] = useState("");

    function handleSearch() {
        history(`/search?q=${search}`);
    }
    return (
        <div className='Main'>
            <div className={classes.box}>
                <input
                    placeholder='наименование или ссылка'
                    onChange={(event) => setSearch(event.target.value)}
                    className={classes.input}
                />
            </div>
            <WhereSearch/>
            <MoneySort/>
            <div className={classes.box}>
                <button className={clases.button} onClick={handleSearch}>ПОИСК</button>
            </div>
        </div>
    )
}