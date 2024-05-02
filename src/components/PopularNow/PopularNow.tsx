import React from "react";
import clases from "./PopularNow.module.css"
import Card from "../Card/Card";
export default function PopularNow() {

    return (
        <div >
            <h1 className={clases.Text}>ПОПУЛЯРНЫЕ ТОВАРЫ</h1>
            <Card name="Iphone 11"/>

        </div>
    );
}