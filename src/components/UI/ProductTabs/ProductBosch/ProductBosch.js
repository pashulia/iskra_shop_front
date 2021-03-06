import React from "react";
import {Card, CardGroup} from "react-bootstrap";
import './../ProductTabs.scss';
import first from "../../../../assets/productImages/BoschFGR7DQP.jpg";
import second from "../../../../assets/productImages/BoschFR8DPP33.jpg";
import third from "../../../../assets/productImages/BoschYR7LPP332W.jpg";
import fourth from "../../../../assets/productImages/BoschZR7SI332S.jpg";

const ProductsBosch = () => {
    return (
        <CardGroup>
            <Card border="light" className="card--left">
                <Card.Img className="image--product" variant="top" src={first}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">Bosch FGR7DQP</Card.Subtitle>
                    <Card.Text>
                        3400тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" className="card--center">
                <Card.Img className="image--product" variant="top" src={second}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">Bosch FR8DPP33</Card.Subtitle>
                    <Card.Text>
                        3200тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" className="card--center">
                <Card.Img className="image--product" variant="top" src={third}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">Bosch YR7LPP332W</Card.Subtitle>
                    <Card.Text>
                        4000тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" className="card--right">
                <Card.Img className="image--product" variant="top" src={fourth}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">Bosch ZR7SI332S</Card.Subtitle>
                    <Card.Text>
                        3700тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
        </CardGroup>
    )
};

export default ProductsBosch;