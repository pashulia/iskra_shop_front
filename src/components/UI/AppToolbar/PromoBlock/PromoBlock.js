import React from 'react';
import c from "./PromoBlock.module.css"
import imagePromo from "../../../../assets/image/denso-3.jpg";
import imgPromo from "../../../../assets/image/ngk-4.jpg";

export default function PromoBlock() {

    return (
        <>
            <div className={c.wrap}>
                <div className={c.promoBlock}>
                    <img className={c.promoImage} src={imagePromo} alt="Denso"/>
                    <h3 className={c.promoArticle}>Коллекция Зима-2022</h3>
                </div>
                <div className={c.promoImg}>
                    <img className={c.promoImage} src={imgPromo} alt="Ngk"/>
                    <h2 className={c.article}>Скидка 50% <br/>V-POWER</h2>
                </div>
            </div>
        </>
    );
}