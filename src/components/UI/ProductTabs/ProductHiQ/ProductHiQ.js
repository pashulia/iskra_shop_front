import React from "react";
import {Card, CardGroup} from "react-bootstrap";
import './../ProductTabs.scss';
import first from "../../../../assets/productImages/hi-q1.jpeg";
import second from "../../../../assets/productImages/hi-q2.jpg";
import third from "../../../../assets/productImages/hi-q3.jpg";
import fourth from "../../../../assets/productImages/hi-q4.jpeg";

const ProductsHiQ = () => {
    return (
        <CardGroup>
            <Card border="light" className="card-left">
                <Card.Img className="image--product" variant="top" src={first}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">Sangsin Hi-Q SP1048</Card.Subtitle>
                    <Card.Text>
                        6000тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" className="card--center">
                <Card.Img className="image--product" variant="top" src={second}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">Sangsin Hi-Q SP1206</Card.Subtitle>
                    <Card.Text>
                        10000тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" className="card--center">
                <Card.Img className="image--product" variant="top" src={third}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">Sangsin Hi-Q SP1271</Card.Subtitle>
                    <Card.Text>
                        9000тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" className="card--right">
                <Card.Img className="image--product" variant="top" src={fourth}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">Sangsin Hi-Q SP1375</Card.Subtitle>
                    <Card.Text>
                        10000тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
        </CardGroup>
    )
};

export default ProductsHiQ;