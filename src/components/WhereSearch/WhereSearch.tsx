import React from "react";

import * as classes from "./style.module.css";

export const WhereSearch = (): JSX.Element => {
    return (
        <div className={classes.box}>
            <div className={classes.shops}>
                <div className={classes["overlap-group"]}>

                    <div className={classes["text-wrapper"]}>где ищем?</div>

                </div>
            </div>
        </div>
    );
};
