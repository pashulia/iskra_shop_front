import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import c from "./PromoBlock.module.css"
import denso from "../../../assets/image/denso-3.jpg";
import ngk from "../../../assets/image/ngk-4.jpg";
import {Card, CardGroup} from "react-bootstrap";

export default function PromoBlock() {

    return (
        <>
            <CardGroup className={c.wrap}>
                <Card className={c.bannerBig}>
                    <a>
                        <Card.Img variant="bottom" src={denso} style={{width: '40rem'}}/>
                    </a>
                    <Card.Title className={c.bannerText}>
                        <h1>Коллекция Зима-2022</h1>
                    </Card.Title>
                </Card>
                <Card style={{border: '1px solid white'}} className={c.bannerSmall}>
                    <a>
                        <Card.Img variant="bottom" src={ngk} style={{width: '30rem'}}/>
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