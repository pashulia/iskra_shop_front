import React from 'react';
import {Card} from 'react-bootstrap';
import './../PopularProductTabs.scss';
import fourth from '../../../../assets/productImagesSmall/bosch004.jpeg';
import second from '../../../../assets/productImagesSmall/denso002.jpeg';
import first from '../../../../assets/productImagesSmall/hi-q001.jpeg';
import third from '../../../../assets/productImagesSmall/ngk003.jpg';

const PopularProduct = () => {
    return (
        <div className="wrap">
            <Card className="card">
                <div className="frame">
                    <Card.Img variant="top" src={first}/>
                </div>
                <Card.Body>
                    <Card.Subtitle className="subtitle">
                        <a href="#" className="link">Колодки для Lada</a>
                    </Card.Subtitle>
                    <Card.Text className="text">
                        4200тг
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card className="card">
                <div className="frame">
                    <Card.Img variant="top" src={second}/>
                </div>
                <Card.Body>
                    <Card.Subtitle className="subtitle">
                        <a href="#" className="link">Свечи для Toyota</a>
                    </Card.Subtitle>
                    <Card.Text className="text">
                        1190тг
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card className="card">
                <div className="frame">
                    <Card.Img variant="top" src={third}/>
                </div>
                <Card.Body>
                    <Card.Subtitle className="subtitle">
                        <a href="#" className="link">Свечи для Mazda</a>
                    </Card.Subtitle>
                    <Card.Text className="text">
                        990тг
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card className="card">
                <div className="frame">
                    <Card.Img variant="top" src={fourth}/>
                </div>
                <Card.Body>
                    <Card.Subtitle className="subtitle">
                        <a href="#" className="link">Свечи для Audi</a>
                    </Card.Subtitle>
                    <Card.Text className="text">
                        1100тг
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};

export default PopularProduct;