import React from "react";
import classes from "./Search.module.css";

export const Search = (): JSX.Element => {
    return (
        <div className={classes.box}>
            <input className={classes.input} placeholder="Поиск" />
            <button className={classes.button}>ПОИСК</button>
        </div>
    );
};
