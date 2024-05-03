import React from "react";
import clases from "./PopularNow.module.css"
import Card from "../Card/Card";
export default function PopularNow() {

    return (
        <div className={clases.PopularNow} >
            <h1 className={clases.Text}>ПОПУЛЯРНО СЕЙЧАС</h1>
            <Card name="Iphone 11"/>

        </div>
    );
}