import React from 'react';
import classes from './MainText.module.css';
import {WhereSearch} from "../WhereSearch/WhereSearch";
import {Search} from "../Search/Search";
import {MoneySort} from "../MoneySort/MoneySort"; // Подключаем файл стилей

export default function MainText() {
    return(

        <div className={classes.Main}>
            <div className={classes.Text}>НАХОДИТЕ САМЫЕ ВЫГОДНЫЕ ЦЕНЫ </div>

            <br/><br/>
            <span className={classes.Textsecond}>НА
               <span className={classes.TextThird}>   PEEKER  </span></span>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className={classes.SearchBlock}>
    <Search/>
        <WhereSearch/>
            <MoneySort/>
            </div>
        </div>
    )
}
