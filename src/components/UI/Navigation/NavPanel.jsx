import React from 'react';
import '../../../styles/app.css'
import cl from './NavPanel.module.css'

const NavPanel = () => {
    return (
        <div className={cl.nav}>
            <img src="http://195.133.75.184/images/logo-store.png" alt="Logo" className="logo"/>
            <a href="#" className={cl.nav__links}>
                <strong>Sign Up</strong>
                <p>|</p>
                <strong>Log In</strong>
            </a>
        </div>
    );
};

export default NavPanel;