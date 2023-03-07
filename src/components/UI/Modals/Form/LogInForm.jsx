import React from 'react';
import cl from "./Form.module.css";

const LogInForm = () => {
    return (
        <div className={cl.logInForm}>
            <label htmlFor="login">Log in</label>
            <input type="text" name="login" placeholder="Login or e-mail" className={cl.loginInput}/>
            <input type="password" placeholder="Password" className={cl.loginPassInput}/>
        </div>
    );
};

export default LogInForm;