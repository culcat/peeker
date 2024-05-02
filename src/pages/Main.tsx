import React, {useState} from "react";
import {Header} from '../components/Header/Header'
import MainText from "../components/MainText/MainText";
import {WhereSearch} from "../components/WhereSearch/WhereSearch";
// import classes from "../components/MainText/MainText.module.css";
import {Search} from "../components/Search/Search";
import {MoneySort} from "../components/MoneySort/MoneySort";
import Banners from "../components/Banners/Banners";

export default function Main() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    return(
        <>
            <Header/>
            <MainText/>
            <div className='Main'>
                <Search/>
                <WhereSearch openMenu={() => setIsMenuOpen(true)} isMenuOpen={isMenuOpen}/>
                <MoneySort/>

            </div>
            <br/>
            <div className='Main'>
            <Banners/></div>
        </>
    )
}