import React from "react";
import classes from './Header.module.css'

export const Header = (): JSX.Element => {
    return (
        <div className={classes.Header}>
            <header className={classes.header}>
                <div className={classes["text-wrapper"]}>PEEKER.ME</div>
                <div className={classes.place}>
                    <img className={classes.line} alt="Line" src="line-2.svg" />
                    <div className={classes.div}>Ростов-на-Дону</div>
                    <div className={classes["text-wrapper-2"]}>Мой город:</div>
                    <img className={classes.location} alt="Location" src="location.svg" />
                </div>
                <div className={classes.frame}>
                    <div className={classes["text-wrapper-3"]}>ИИ-ассистент</div>
                </div>
            </header>
        </div>
    );
};
