import React from "react";
import {Card, CardGroup} from "react-bootstrap";
import first from "../../../../assets/productImages/tesla4bg.jpeg";
import second from "../../../../assets/productImages/TESLAgreen.jpg";
import third from "../../../../assets/productImages/TeslaIgnition.jpg";
import fourth from "../../../../assets/productImages/TESLAblue.jpg";

const ProductsTesla = () => {
    return (
        <CardGroup>
            <Card border="light" style={{marginRight: '25px'}}>
                <Card.Img variant="top" src={first}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>Tesla T482B</Card.Subtitle>
                    <Card.Text>
                        6990тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" style={{marginRight: '25px', marginLeft: '25px'}}>
                <Card.Img variant="top" src={second}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>Tesla T247P</Card.Subtitle>
                    <Card.Text>
                        6990тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" style={{marginRight: '25px', marginLeft: '25px'}}>
                <Card.Img variant="top" src={third}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>Tesla T181b</Card.Subtitle>
                    <Card.Text>
                        11990тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" style={{marginLeft: '25px'}}>
                <Card.Img variant="top" src={fourth}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>Tesla T297B</Card.Subtitle>
                    <Card.Text>
                        9990тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
        </CardGroup>
    )
};

export default ProductsTesla;