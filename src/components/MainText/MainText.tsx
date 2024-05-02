import React, { useState } from 'react';
import classes from './MainText.module.css';


export default function MainText() {


    return (
        <div  className={classes.Main}>
                <>
                    <div className={classes.Text}>НАХОДИТЕ САМЫЕ ВЫГОДНЫЕ ЦЕНЫ </div>
                    <br /><br />
                    <span className={classes.Textsecond}>НА
                        <span className={classes.TextThird}>   PEEKER  </span>
                    </span>

                </>



        </div>
    );
}
