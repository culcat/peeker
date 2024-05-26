import React, {useState} from "react";
import {Header} from '../components/Header/Header'
import MainText from "../components/MainText/MainText";
import {WhereSearch} from "../components/WhereSearch/WhereSearch";
// import classes from "../components/MainText/MainText.module.css";

import {Search} from "../components/Search/Search";
import {MoneySort} from "../components/MoneySort/MoneySort";
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
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }


    function handleSearch(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setSearch(e.currentTarget.value);
        setStatus(true);
    }
    return(
        <>
            <Header/>
            <MainText/>
            <div className='Main'>
                <div className={classes.box}>


                    <input placeholder='наименование или ссылка' onChange={(event) => setSearch(event.target.value)} className={classes.input}/>


                </div>
                <WhereSearch openMenu={() => setIsMenuOpen(true)} isMenuOpen={isMenuOpen}/>
                <MoneySort/>
                <button className={clases.button} onClick={(event) => handleSearch(event)}>ПОИСК</button>
            </div>
            <br/>
            {status && <SearchResult name={search}/>}
            <div className='Main'>
                <Banners/></div>
            <br/>
            <PopularNow/>
            <br/>
            <WhereWeSearch/>
            <br/>

        </>
    )
}