import React from "react";
import classes from "./Search.module.css";

export const Box = (): JSX.Element => {
    return (
        <div className={classes.box}>
            <div className={classes.SEARCH}>
                <div className={classes["overlap-group"]}>
                    <div className={classes["text-wrapper"]}>наименование или ссылка</div>
                </div>
            </div>
        </div>
    );
};
