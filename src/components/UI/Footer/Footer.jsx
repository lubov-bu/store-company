import React from 'react';
import '../../../styles/app.css';
import cl from './Footer.module.css';

const Footer = () => {
    return (
        <div className={cl.footer__block}>
            <img src="http://195.133.75.184/images/logo-store.png" alt="Logo" className="logo"/>
            <div className={cl.footer__contact}>
                <a href="#">Contact us: +1 111 111 11 00</a>
                <a href="#">E-mail: beautystore@gmail.com</a>
            </div>
        </div>
    );
};

export default Footer;