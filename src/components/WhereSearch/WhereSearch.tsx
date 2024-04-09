import React, {useState} from "react";
import {Popup} from '../Popup/Popup'
import classes from "./WhereSearch.module.css";

export const WhereSearch = (): JSX.Element => {
const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className={classes.box}>
            <div className={classes.shops}>
                <button className={classes["overlap-group"]}
                onClick={()=>setIsMenuOpen(true)}>
                     где ищем?
                </button>
                {isMenuOpen && <Popup/>}
            </div>
        </div>
    );
};
