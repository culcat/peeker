import React, { useState } from 'react';
import { Popup } from '../Popup/Popup';
import classes from "./WhereSearch.module.css";

type WhereSearchProps = {
    openMenu: () => void;
    isMenuOpen: boolean;
};

export const WhereSearch: React.FC<WhereSearchProps> = (): JSX.Element => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className={classes.box}>

            <input type='button' value='где ищем?' className={classes["overlap-group"]} onClick={togglePopup}/>

            <Popup isOpen={isPopupOpen} close={closePopup}/>

        </div>
    );
};
