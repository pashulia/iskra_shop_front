import React from 'react';

import './Footer.scss';
import FormSubscribe from './SubscribeForm/SubscribeForm';

const Footer = () => {
    return (
        <div className="footer__wrap">
            <FormSubscribe/>
            <h3 className="footer__content">ТОО "AvtoIskra" 2021</h3>
        </div>
    )
};

export default Footer;