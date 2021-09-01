import React from "react";
import {Card, CardGroup} from "react-bootstrap";
import brand from "../../../../assets/productImages/Garanti1.jpg";

const ProductsGaranti = () => {
    return (
        <CardGroup>
            <Card border="light" style={{marginRight: '25px'}}>
                <Card.Img variant="top" src={brand}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>Garanti 01214.22</Card.Subtitle>
                    <Card.Text>
                        2800тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" style={{marginRight: '25px', marginLeft: '25px'}}>
                <Card.Img variant="top" src={brand}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>Garanti 0306.12</Card.Subtitle>
                    <Card.Text>
                        4600тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" style={{marginRight: '25px', marginLeft: '25px'}}>
                <Card.Img variant="top" src={brand}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>Garanti 0315.04</Card.Subtitle>
                    <Card.Text>
                        4800тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" style={{marginLeft: '25px'}}>
                <Card.Img variant="top" src={brand}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>Garanti 0367.00</Card.Subtitle>
                    <Card.Text>
                        4000тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
        </CardGroup>
    )
};

export default ProductsGaranti;