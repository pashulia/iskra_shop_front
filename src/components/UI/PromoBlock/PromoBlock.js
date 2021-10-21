import React from 'react';

import {
    Card,
    CardGroup,
} from 'react-bootstrap';

import denso from '../../../assets/image/denso-3.jpg';
import ngk from '../../../assets/image/ngk-4.jpg';
import './PromoBlock.scss';

export default function PromoBlock() {

    return (
        <>
            <CardGroup className="promo__wrap">
                <Card className="bannerBig">
                    <a>
                        <Card.Img variant="bottom" src={denso} className="promo__img"/>
                    </a>
                    <Card.Title className="bannerText">
                        <h1>Коллекция Зима-2022</h1>
                    </Card.Title>
                </Card>
                <Card className="bannerSmall">
                    <a>
                        <Card.Img variant="bottom" src={ngk} className="promo__img"/>
                    </a>
                    <Card.Title className="bannerText">
                        <h2>Скидка 50%</h2>
                        <p>V-POWER</p>
                    </Card.Title>
                </Card>
            </CardGroup>
        </>
    );
}