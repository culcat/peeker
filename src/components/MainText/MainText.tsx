import React, { useState } from 'react';
import classes from './MainText.module.css';
import { WhereSearch } from "../WhereSearch/WhereSearch";
import { Search } from "../Search/Search";
import { MoneySort } from "../MoneySort/MoneySort";
import Banners from "../Banners/Banners";

export default function MainText() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div onClick={() => setIsMenuOpen(false)} className={classes.Main}>
            {!isMenuOpen && (
                <>
                    <div className={classes.Text}>НАХОДИТЕ САМЫЕ ВЫГОДНЫЕ ЦЕНЫ </div>
                    <br /><br />
                    <span className={classes.Textsecond}>НА
                        <span className={classes.TextThird}>   PEEKER  </span>
                    </span>

                </>
            )}
            <div className={classes.SearchBlock}>
                <Search />
                <WhereSearch openMenu={() => setIsMenuOpen(true)} isMenuOpen={isMenuOpen} />
                <MoneySort />

            </div>
            <Banners/>

        </div>
    );
}
