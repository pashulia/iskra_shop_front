import React from 'react';
import c from "./PromoBlock.module.css"
import imagePromo from "../../../assets/image/denso-3.jpg";
import imgPromo from "../../../assets/image/ngk-4.jpg";
import {Card, CardGroup} from "react-bootstrap";

export default function PromoBlock() {

    return (
        <>
            <CardGroup className={c.wrap}>
                <Card className={c.bannerBig}>
                    <a>
                        <Card.Img variant="bottom" src={imagePromo}/>
                    </a>
                    <Card.Title className={c.bannerText}>
                        <h1>Коллекция Зима-2022</h1>
                    </Card.Title>
                </Card>
                <Card style={{width: '25rem'}} className={c.bannerSmall}>
                    <a>
                        <Card.Img variant="top" src={imgPromo} style={{width: '25rem'}}/>
                    </a>
                    <Card.Title className={c.bannerText}>
                        <h2>Скидка 50%</h2>
                        <p>V-POWER</p>
                    </Card.Title>
                </Card>
            </CardGroup>
        </>
    );
}