import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';

import PopularProduct from './PopularProduct/PopularProduct';

function PopularProductTabs() {

    return (
        <div style={{display: 'block', width: 200, padding: 30}}>
            <h3 style={{marginLeft: 10}}>ПОПУЛЯРНОЕ</h3>
            <hr style={{marginLeft: 10, border: '1px solid', width: '18rem'}}/>
            <PopularProduct/>
        </div>
    );
}

export default PopularProductTabs;