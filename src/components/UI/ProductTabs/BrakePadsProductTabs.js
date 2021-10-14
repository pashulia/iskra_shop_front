import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Tab, Tabs} from "react-bootstrap";
import ProductsHiQ from "./ProductHiQ/ProductHiQ";
import ProductsGaranti from "./ProductGaranti/ProductGaranti";
import './ProductTabs.scss';

function BrakePadsProductTabs() {

    return (
        <div className="tabs">
            <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="Тормозные колодки Hi-Q">
                    <ProductsHiQ/>
                </Tab>
                <Tab eventKey="second" title="Тормозные колодки Garanti">
                    <ProductsGaranti/>
                </Tab>
            </Tabs>
        </div>
    );
}

export default BrakePadsProductTabs;