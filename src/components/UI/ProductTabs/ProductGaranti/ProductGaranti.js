import React from "react";
import {Card, CardGroup} from "react-bootstrap";
import './../ProductTabs.scss';
import brand from "../../../../assets/productImages/Garanti1.jpg";

const ProductsGaranti = () => {
    return (
        <CardGroup>
            <Card border="light" className="card--left">
                <Card.Img className="image--product" variant="top" src={brand}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">Garanti 01214.22</Card.Subtitle>
                    <Card.Text>
                        2800тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" className="card--center">
                <Card.Img className="image--product" variant="top" src={brand}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">Garanti 0306.12</Card.Subtitle>
                    <Card.Text>
                        4600тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" className="card--center">
                <Card.Img className="image--product" variant="top" src={brand}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">Garanti 0315.04</Card.Subtitle>
                    <Card.Text>
                        4800тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" className="card--right">
                <Card.Img className="image--product" variant="top" src={brand}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">Garanti 0367.00</Card.Subtitle>
                    <Card.Text>
                        4000тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
        </CardGroup>
    )
};

export default ProductsGaranti;