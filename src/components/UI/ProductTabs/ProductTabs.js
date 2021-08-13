import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardGroup, Tab, Tabs} from "react-bootstrap";
import imagePromo from "../../../assets/image/denso-3.jpg";
import imgPromo from "../../../assets/image/ngk-4.jpg";

function ProductTabs() {

    return (
        <div style={{ display: 'block', width: 700, padding: 30 }}>
            <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="NGK">
                    Hii, I am 1st tab content
                </Tab>
                <Tab eventKey="second" title="DENSO">
                    Hii, I am 2nd tab content
                </Tab>
                <Tab eventKey="third" title="BOSCH">
                    Hii, I am 3rd tab content
                </Tab>
            </Tabs>
        </div>
    );
}

export default ProductTabs;

// <CardGroup style={{display: 'flex', justifyContent: 'space-around'}}>
//     <Card style={{
//         border: '1px solid grey',
//         position: 'relative',
//         overflow: 'hidden',
//         margin: '15px 0 0'
//     }}>
//         <a>
//             <Card.Img variant="bottom" src={imagePromo}/>
//         </a>
//         <Card.Title style={{
//             fontFamily: 'Century',
//             textTransform: 'capitalize',
//             position: 'absolute',
//             left: '25px',
//             top: '15px'
//         }}>
//             <h1 style={{
//                 fontSize: '30px',
//                 fontWeight: 'bold',
//                 margin: '0'
//             }}>Коллекция Зима-2022</h1>
//         </Card.Title>
//     </Card>
//     <Card style={{
//         width: '25rem',
//         position: 'relative',
//         overflow: 'hidden',
//         margin: '30px 0 0'
//     }}>
//         <a>
//             <Card.Img variant="top" src={imgPromo} style={{width: '25rem'}}/>
//         </a>
//         <Card.Title style={{
//             fontFamily: 'Century',
//             textTransform: 'capitalize',
//             position: 'absolute',
//             left: '25px',
//             top: '15px'
//         }}>
//             <h2 style={{
//                 color: 'white',
//                 fontSize: '32px',
//                 fontWeight: 'bold',
//                 margin: '0'
//             }}>Скидка 50%</h2>
//             <p style={{
//                 color: 'white',
//                 fontWeight: '100',
//                 fontSize: '25px',
//                 margin: '0'
//             }}>V-POWER</p>
//         </Card.Title>
//     </Card>
// </CardGroup>