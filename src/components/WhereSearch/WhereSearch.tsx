import React, {useState} from "react";

import classes from "./WhereSearch.module.css";

export const WhereSearch = (): JSX.Element => {
    const [marketplaces, setMarketplaces] = useState()
    return (
        <div className={classes.box}>
            <div className={classes.shops}>
                <select className={classes["overlap-group"]}>
                    <option  > где ищем?</option>


                </select>
            </div>
        </div>
    );
};
