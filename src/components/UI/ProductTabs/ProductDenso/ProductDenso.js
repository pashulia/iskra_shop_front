import React from "react";
import {Card, CardGroup} from "react-bootstrap";
import './../ProductTabs.scss';
import first from "../../../../assets/productImages/denso6.jpg";
import second from "../../../../assets/productImages/DensoK20TT4bg.jpg";
import third from "../../../../assets/productImages/DensoK20TXR.jpg";
import fourth from "../../../../assets/productImages/DensoKJ16CRL11.jpg";

const ProductsDenso = () => {
    return (
        <CardGroup>
            <Card border="light" className="card--left">
                <Card.Img className="image--product" variant="top" src={first}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">DENSO K16TT#4</Card.Subtitle>
                    <Card.Text>
                        1490тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" className="card--center">
                <Card.Img className="image--product" variant="top" src={second}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">DENSO K20TT#4</Card.Subtitle>
                    <Card.Text>
                        1490тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" className="card--center">
                <Card.Img className="image--product" variant="top" src={third}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">DENSO K20TXR</Card.Subtitle>
                    <Card.Text>
                        2000тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" className="card--right">
                <Card.Img className="image--product" variant="top" src={fourth}/>
                <Card.Body>
                    <Card.Subtitle className="subtitle">DENSO KJ16CRL11</Card.Subtitle>
                    <Card.Text>
                        1500тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link className="link" href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
        </CardGroup>
    )
};

export default ProductsDenso;