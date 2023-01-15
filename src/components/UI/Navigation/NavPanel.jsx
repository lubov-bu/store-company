import React from 'react';
import '../../../styles/app.css'
import cl from './NavPanel.module.css'

const NavPanel = ({children}) => {
    return (
        <div className={cl.nav}>
            <img src="http://195.133.75.184/images/logo-store.png" alt="Logo" className="logo"/>
            <div className={cl.nav__links}>
                {children}
            </div>
        </div>
    );
};

export default NavPanel;