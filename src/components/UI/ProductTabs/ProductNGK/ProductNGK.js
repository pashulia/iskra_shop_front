import React from "react";
import {Card, CardGroup} from "react-bootstrap";
import first from "../../../../assets/productImages/NGK1682.jpg";
import second from "../../../../assets/productImages/NGK1961.jpg";
import third from "../../../../assets/productImages/NGK3967.jpg";
import fourth from "../../../../assets/productImages/NGK96596.jpg";

const ProductsNGK = () => {
    return (
        <CardGroup>
            <Card border="light" style={{marginRight: '25px'}}>
                <Card.Img variant="top" src={first}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>NGK 1682 DCPR7EGP</Card.Subtitle>
                    <Card.Text>
                        2000тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" style={{marginRight: '25px', marginLeft: '25px'}}>
                <Card.Img variant="top" src={second}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>NGK 1208 ILZFR6D-11</Card.Subtitle>
                    <Card.Text>
                        5990тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" style={{marginRight: '25px', marginLeft: '25px'}}>
                <Card.Img variant="top" src={third}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>NGK 3967 BKR5EKB-11</Card.Subtitle>
                    <Card.Text>
                        1490тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" style={{marginLeft: '25px'}}>
                <Card.Img variant="top" src={fourth}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>NGK 96596 ZKER6A-10EG</Card.Subtitle>
                    <Card.Text>
                        2490тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
        </CardGroup>
    )
};

export default ProductsNGK;