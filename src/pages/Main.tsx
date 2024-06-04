import React, { useState } from "react";
import { Header } from '../components/Header/Header';
import MainText from "../components/MainText/MainText";
import { WhereSearch } from "../components/WhereSearch/WhereSearch";
import { Search } from "../components/Search/Search";
import { MoneySort } from "../components/MoneySort/MoneySort";
import Banners from "../components/Banners/Banners";
import PopularNow from "../components/PopularNow/PopularNow";
import WhereWeSearch from "../components/WhereWeSearch/WhereWeSearch";
import SearchButton from "../components/SearchButton/SearchButton";
import SearchResult from "../components/SearchResult/SearchResult";
import clases from "../components/SearchButton/SearchButton.module.css";
import classes from "../components/Search/Search.module.css";

export default function Main() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); // New state for search term

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function handleSearch() {
        setSearchTerm(search); // Update searchTerm with current search input value
        setStatus(true); // Set status to true to render SearchResult
    }

    return (
        <>
            <Header />
            <MainText />
            <div className='Main'>
                <div className={classes.box}>
                    <input
                        placeholder='наименование или ссылка'
                        onChange={(event) => setSearch(event.target.value)}
                        className={classes.input}
                    />
                </div>
                <WhereSearch />
                <MoneySort />
                <div className={classes.box}>
                    <button className={clases.button} onClick={handleSearch}>ПОИСК</button>
                </div>
            </div>
            <br />

            <div className='Main'>
                {status ? <>
                    <SearchResult name={searchTerm} /> </>
                    : (
                    <>
                        <Banners />
                        <br />
                        <PopularNow />
                        <br />
                        <WhereWeSearch />
                    </>
                )}
            </div>
        </>
    );
}
