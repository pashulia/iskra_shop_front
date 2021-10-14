import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Tab, Tabs} from "react-bootstrap";
import ProductsNGK from "./ProductNGK/ProductNGK";
import ProductsDenso from "./ProductDenso/ProductDenso";
import ProductsBosch from "./ProductBosch/ProductBosch";
import './ProductTabs.scss';

function SparkPlugProductTabs() {

    return (
        <div className="tabs">
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