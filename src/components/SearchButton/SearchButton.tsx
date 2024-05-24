import React from'react';
import clases from './SearchButton.module.css'
export default function SearchButton() {
    return (
        <div className={clases.box}>
        <button className={clases.button}>ПОИСК</button>
        </div>
    )
}