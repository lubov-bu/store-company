import React from 'react';
import cl from './NavPanel.module.css'

const NavPanel = () => {
    return (
        <div className={cl.nav}>
            <h1 className="app__name">Clothes Store</h1>
            <a href="#" className={cl.nav__links}>
                <strong>Sign Up</strong>
                <p>|</p>
                <strong>Log In</strong>
            </a>
        </div>
    );
};

export default NavPanel;