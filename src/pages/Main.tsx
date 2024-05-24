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

export default function Main() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState(false);
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function handleSearch(e) {
        setSearch(e.target.value);
        setStatus(true);
    }
    return(
        <>
            <Header/>
            <MainText/>
            <div className='Main'>
                <Search/>
                <WhereSearch openMenu={() => setIsMenuOpen(true)} isMenuOpen={isMenuOpen}/>
                <MoneySort/>
                <SearchButton onClick={handleSearch({target: {value: search}})}/>

            </div>
            <br/>
            {status && <SearchResult search={search}/>}
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