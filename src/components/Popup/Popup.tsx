import React from "react";
import classes from "./Popup.module.css";

export const Popup = (): JSX.Element => {
    return (
        <>
            <div className={classes.overlay}></div>
            <div className={classes["popup-container"]}>
        <div className={classes.marketplaces}>
            <div className={classes.title}>
                <div className={classes["text-wrapper-2"]}>ГДЕ ИСКАТЬ?</div>
            </div>
            <p className={classes["text-wrapper"]}>
                По умолчанию сравнение производится по всем маркетплейсам, но вы можете ограничить круг поиска
            </p>

            <div className={classes.SEARCH}>


                    <input placeholder='наименование' className={classes["overlap-group"]} />


            <div className={classes.all}>
                <input
                    className={classes["checkboxes-instance"]}
                    type="checkbox"
                />
                <div className={classes["text-wrapper-4"]}>По всем маркетплейсам</div>

            </div>

            <div className={classes.view}>
                <div className={classes["text-wrapper-5"]}>ИЛИ</div>
                <div className={classes.ym}>
                    <input
                        className={classes["checkboxes-instance"]}

                        type="checkbox"
                    />
                    <img className={classes["yandex-market"]} alt="Yandex market" src="yandex-market-1.svg" />
                </div>
                <div className={classes.megamarket}>
                    <input
                        className={classes["checkboxes-instance"]}
                        type="checkbox"
                    />
                    <img className={classes["logo-mega-desktop"]} alt="megamarket" src="logo-mega-desktop-1d57cb-1.svg" />
                </div>
                <div className={classes.ozon}>
                    <input
                        className={classes["checkboxes-instance"]}

                        type="checkbox"
                    />
                    <img className={classes["ozon-logo-RGB-blue"]} alt="Ozon" src="ozon-logo-RGB-blue-1.svg" />
                </div>
                <div className={classes.wb}>
                    <input
                        className={classes["checkboxes-instance"]}
                        type="checkbox"
                    />
                    <img className={classes["frame"]} alt="WB" src="frame.svg" />
                </div>
            </div>
            <button className={classes.find}>
                <div className={classes["text-wrapper-6"]}>Подтвердить</div>
            </button>
            </div>
        </div>
            </div>
        </>
    );
};