import React from "react";
import classes from './Header.module.css'
import location from "../assets/Location.svg"
export const Header = (): JSX.Element => {
    return (
        <div className={classes.Header}>
            <header className={classes.header}>
                <div className={classes["text-wrapper"]}>PEEKER.ME</div>
                <div className={classes.place}>
                    <img className={classes.location} alt="Location" src={location}/>
                    <div className={classes["text-wrapper-2"]}>Мой город:</div>
                    <div className={classes.div}>Ростов-на-Дону</div>

                </div>
                <div className={classes.frame}>
                    <div className={classes["text-wrapper-3"]}>ИИ-ассистент</div>
                </div>
            </header>
        </div>
    );
};
