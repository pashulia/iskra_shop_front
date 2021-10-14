import './PopularProductTabs.scss';
import React from 'react';
import PopularProduct from './PopularProduct/PopularProduct';

function PopularProductTabs() {

    return (
        <div className="main">
            <h3>ПОПУЛЯРНОЕ</h3>
            <hr/>
            <PopularProduct/>
        </div>
    );
}

export default PopularProductTabs;