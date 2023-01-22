import React from 'react';
import cl from "./Form.module.css";

const LogInForm = ({children}) => {

    return (
        <div className="logInModalContent">
            <div className={cl.logInForm}>
                <p>Log in and Go shopping!</p>
                {children}
                <input type="text" placeholder="Username" className={cl.loginInput}/>
                <input type="text" placeholder="Password" className={cl.loginPassInput}/>
                <button className={cl.logInButton}>Log In</button>
            </div>
        </div>
    );
};

export default LogInForm;