import React from 'react';
import cl from "./Form.module.css";

const SignUpForm = () => {
    return (
        <div className={cl.signUpForm}>
            <label htmlFor="signup">Sign up</label>
            <input type="text" name="signup" placeholder="Username" className={cl.signupInput}/>
            <input type="email" placeholder="E-mail" className={cl.signupMailInput}/>
            <input type="password" placeholder="Password" className={cl.signupPassInput}/>
        </div>
    );
};

export default SignUpForm;