import React from 'react';
import cl from "../Modals/Form/Form.module.css";

const LoginButton = ({children}) => {
    return (
        <div>
            <button className={cl.logInButton}>{children}</button>
        </div>
    );
};

export default LoginButton;