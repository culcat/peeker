import React from 'react';
import {Popup} from '../Popup/Popup'
import classes from "./WhereSearch.module.css";

type WhereSearchProps = {
    openMenu: () => void;
    isMenuOpen: boolean;
};

export const WhereSearch: React.FC<WhereSearchProps> = ({ openMenu, isMenuOpen }): JSX.Element => {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false); // Состояние для открытия и закрытия попапа

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    return (
        <div className="Main">
        <div className={classes.box}>
            <div className={classes.shops}>
                <button className={classes["overlap-group"]} onClick={() => openMenu()}>
                    где ищем?
                </button>
                {isMenuOpen && <Popup/>}
            </div>
        </div>
        </div>
    );
};