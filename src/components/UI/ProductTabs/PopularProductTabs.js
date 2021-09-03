import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PopularProduct from "./PopularProduct/PopularProduct";

function PopularProductTabs() {

    return (
        <div style={{display: 'block', width: 200, padding: 30}}>
            <h3 style={{marginLeft: 70}}>ПОПУЛЯРНОЕ</h3>
            <hr style={{marginLeft: 70, border: '1px solid', width: 250}}/>
            <PopularProduct/>
        </div>
    );
}

export default PopularProductTabs;