import React from 'react';
import "../Modals/Form/Form.css";

const LoginButton = ({onClick, children}) => {

    return (
        <div>
            <button type="button" className="logInButton" onClick={onClick}>{children}</button>
        </div>
    );
};

export default LoginButton;