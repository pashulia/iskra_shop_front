import React from "react";
import {Card, CardGroup} from "react-bootstrap";
import first from "../../../../assets/productImagesSmall/hi-q001.jpeg";
import second from "../../../../assets/productImagesSmall/denso002.jpeg";
import third from "../../../../assets/productImagesSmall/ngk003.jpg";
import fourth from "../../../../assets/productImagesSmall/bosch004.jpeg";

const PopularProduct = () => {
    return (
        <div style={{marginLeft: 70}}>
            <Card style={{width: '18rem', flexDirection: 'row', border: 'none'}}>
                <div style={{border: '1px solid #0dcaf0'}}>
                    <Card.Img variant="top" src={first}/>
                </div>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: 14, marginBottom: 10}}>
                        <a href="#" style={{textDecoration: 'none', color: 'black'}}>Колодки для Lada</a>
                    </Card.Subtitle>
                    <Card.Text style={{color: 'red'}}>
                        4200тг
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card style={{width: '18rem', flexDirection: 'row', border: 'none'}}>
                <div style={{border: '1px solid #0dcaf0'}}>
                    <Card.Img variant="top" src={second}/>
                </div>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px', marginBottom: 10}}>
                        <a href="#" style={{textDecoration: 'none', color: 'black'}}>Свечи для Toyota</a>
                    </Card.Subtitle>
                    <Card.Text style={{color: 'red'}}>
                        1190тг
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card style={{width: '18rem', flexDirection: 'row', border: 'none'}}>
                <div style={{border: '1px solid #0dcaf0'}}>
                    <Card.Img variant="top" src={third}/>
                </div>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px', marginBottom: 10}}>
                        <a href="#" style={{textDecoration: 'none', color: 'black'}}>Свечи для Mazda</a>
                    </Card.Subtitle>
                    <Card.Text style={{color: 'red'}}>
                        990тг
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card style={{width: '18rem', flexDirection: 'row', border: 'none'}}>
                <div style={{border: '1px solid #0dcaf0'}}>
                    <Card.Img variant="top" src={fourth}/>
                </div>
                <Card.Body>
                    <Card.Subtitle style={{fontSize: '14px', marginBottom: 10}}>
                        <a href="#" style={{textDecoration: 'none', color: 'black'}}>Свечи для Audi</a>
                    </Card.Subtitle>
                    <Card.Text style={{color: 'red'}}>
                        1100тг
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};

export default PopularProduct;