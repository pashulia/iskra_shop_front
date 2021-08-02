import React from 'react';

import c from './Footer.module.css';
import FormSubscribe from './SubscribeForm/SubscribeForm';

const Footer = () => {
    return (
        <div className={c.wrap}>
            <FormSubscribe/>
            <h3 className={c.content}>ТОО "AvtoIskra" 2021</h3>
        </div>
    )
};

export default Footer;