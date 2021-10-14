import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Tab, Tabs} from "react-bootstrap";
import ProductsTesla from "./ProductTesla/ProductTesla";
import './ProductTabs.scss';

function WiresProductTabs() {

    return (
        <div className="tabs">
            <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="Провода Tesla">
                    <ProductsTesla/>
                </Tab>
            </Tabs>
        </div>
    );
}

export default WiresProductTabs;