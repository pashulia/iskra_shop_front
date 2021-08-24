import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Tab, Tabs} from "react-bootstrap";
import ProductsNGK from "./ProductNGK/ProductNGK";
import ProductsDenso from "./ProductDenso/ProductDenso";
import ProductsBosch from "./ProductBosch/ProductBosch";

function SparkPlugProductTabs() {

    return (
        <div style={{display: 'block', width: 1000, padding: 30}}>
            <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="Свечи NGK">
                    <ProductsNGK/>
                </Tab>
                <Tab eventKey="second" title="Свечи DENSO">
                    <ProductsDenso/>
                </Tab>
                <Tab eventKey="third" title="Свечи BOSCH">
                    <ProductsBosch/>
                </Tab>
            </Tabs>
        </div>
    );
}

export default SparkPlugProductTabs;