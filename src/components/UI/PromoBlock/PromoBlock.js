import React from 'react';

import {
    Card,
    CardGroup,
} from 'react-bootstrap';

import denso from '../../../assets/image/denso-3.jpg';
import ngk from '../../../assets/image/ngk-4.jpg';
import c from './PromoBlock.module.css';

export default function PromoBlock() {

    return (
        <>
            <CardGroup className={c.wrap}>
                <Card className={c.bannerBig}>
                    <a>
                        <Card.Img variant="bottom" src={denso} style={{width: '23rem'}}/>
                    </a>
                    <Card.Title className={c.bannerText}>
                        <h1>Коллекция Зима-2022</h1>
                    </Card.Title>
                </Card>
                <Card className={c.bannerSmall}>
                    <a>
                        <Card.Img variant="bottom" src={ngk} style={{width: '23rem'}}/>
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