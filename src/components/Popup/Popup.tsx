import React, { useState } from 'react';
import classes from "./Popup.module.css";
import { useGetMarketplaceQuery } from "../../api/marketplaceAPI";
import { MarketplaceItem } from "../../types/MarketplaceItem";

export const Popup = (): JSX.Element => {
    const { data, isLoading, error } = useGetMarketplaceQuery();
    const [isOpen, setIsOpen] = useState(true); // Используем локальное состояние для открытия и закрытия попапа

    // Если загрузка, показываем загрузочный экран
    if (isLoading) return (
        <div>
            <div className={classes.overlay}></div>
            <div className={classes["popup-container"]}>
                <div className={classes.marketplaces}>
                    <div className={classes.title}>
                        <div className={classes["text-wrapper-2"]}>Загрузка...</div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Если есть ошибка, показываем сообщение об ошибке
    if (error || !data) return (
        <div>
            <div className={classes.overlay}></div>
            <div className={classes["popup-container"]}>
                <div className={classes.marketplaces}>
                    <div className={classes.title}>
                        <div className={classes["text-wrapper-2"]}>Ошибка загрузки данных</div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Функция для закрытия попапа
    const handleClosePopup = () => {
        setIsOpen(false);
    };

    // Если попап закрыт, ничего не отображаем
    if (!isOpen) return null;

    // Отображаем попап
    return (
        <>
            <div className={classes.overlay}></div>
            <div className={classes["popup-container"]}>
                <p className={classes["close-button"]} onClick={handleClosePopup}>X</p>
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
                            <input className={classes["checkboxes-instance"]} type="checkbox" />
                            <div className={classes["text-wrapper-4"]}>По всем маркетплейсам</div>
                        </div>
                        <div className={classes["text-wrapper-5"]}>ИЛИ</div>
                        <div className={classes.view}>
                            {data.map((item) => (
                                <div key={item.id}>
                                    <input className={classes["checkboxes-instance"]} type="checkbox" />
                                    <img className={classes["yandex-market"]} alt={item.data} src={item.icon} />
                                </div>
                            ))}
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
