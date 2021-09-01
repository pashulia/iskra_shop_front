import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Tab, Tabs} from "react-bootstrap";
import ProductsTesla from "./ProductTesla/ProductTesla";

function WiresProductTabs() {

    return (
        <div style={{display: 'block', width: 1000, padding: 30}}>
            <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="Провода Tesla">
                    <ProductsTesla/>
                </Tab>
            </Tabs>
        </div>
    );
}

export default WiresProductTabs;