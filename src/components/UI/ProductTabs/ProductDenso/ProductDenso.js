import React from "react";
import {Card, CardGroup} from "react-bootstrap";
import first from "../../../../assets/productImages/denso6.jpg";
import second from "../../../../assets/productImages/DensoK20TT4bg.jpg";
import third from "../../../../assets/productImages/DensoK20TXR.jpg";
import fourth from "../../../../assets/productImages/DensoKJ16CRL11.jpg";

const ProductsDenso = () => {
    return (
        <CardGroup>
            <Card border="light" style={{marginRight: '25px'}}>
                <Card.Img variant="top" src={first}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>DENSO K16TT#4</Card.Subtitle>
                    <Card.Text>
                        1490тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" style={{marginRight: '25px', marginLeft: '25px'}}>
                <Card.Img variant="top" src={second}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>DENSO K20TT#4</Card.Subtitle>
                    <Card.Text>
                        1490тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" style={{marginRight: '25px', marginLeft: '25px'}}>
                <Card.Img variant="top" src={third}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>DENSO K20TXR</Card.Subtitle>
                    <Card.Text>
                        2000тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
            <Card border="light" style={{marginLeft: '25px'}}>
                <Card.Img variant="top" src={fourth}/>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px'}}>DENSO KJ16CRL11</Card.Subtitle>
                    <Card.Text>
                        1500тг
                    </Card.Text>
                    <small className="text-muted">
                        <Card.Link href="#">Добавить в корзину</Card.Link>
                    </small>
                </Card.Body>
            </Card>
        </CardGroup>
    )
};

export default ProductsDenso;