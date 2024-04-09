import React from "react";
import classes from "./MoneySort.module.css";

export const MoneySort = (): JSX.Element => {
    return (
        <div className={classes.box}>


            <input placeholder='наименование или ссылка' className={classes.input} />


        </div>
    );
};
