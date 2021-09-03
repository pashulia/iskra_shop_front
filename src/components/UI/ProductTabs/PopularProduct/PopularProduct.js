import React from "react";
import {Card, CardGroup} from "react-bootstrap";
import first from "../../../../assets/productImagesSmall/hi-q001.jpeg";
import second from "../../../../assets/productImagesSmall/denso002.jpeg";
import third from "../../../../assets/productImagesSmall/ngk003.jpg";
import fourth from "../../../../assets/productImagesSmall/bosch004.jpeg";

const PopularProduct = () => {
    return (
        <div style={{marginLeft: 70}}>
            <Card border="info" style={{width: '10rem'}}>
                <Card.Img variant="top" src={first}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>Колодки для Lada</Card.Subtitle>
                    <Card.Text>
                        4200тг
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="info" style={{width: '10rem'}}>
                <Card.Img variant="top" src={second}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>Свечи для Toyota</Card.Subtitle>
                    <Card.Text>
                        1190тг
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="info" style={{width: '10rem'}}>
                <Card.Img variant="top" src={third}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>Свечи для Mazda</Card.Subtitle>
                    <Card.Text>
                        990тг
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="info" style={{width: '10rem'}}>
                <Card.Img variant="top" src={fourth}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>Свечи для Audi</Card.Subtitle>
                    <Card.Text>
                        1100тг
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};

export default PopularProduct;