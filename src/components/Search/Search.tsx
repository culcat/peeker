import React from "react";
import classes from "./Search.module.css";

export const Search = (): JSX.Element => {
    return (
        <div className={classes.box}>


                    <input placeholder='наименование или ссылка' className={classes.input} />


        </div>
    );
};
