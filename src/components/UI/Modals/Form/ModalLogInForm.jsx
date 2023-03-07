import React from 'react';
import cl from "./Form.module.css";
import LoginButton from "../../Buttons/LoginButton";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

const ModalLogInForm = ({children}) => {

    return (
        <div className="logInModalContent">
            <div className={cl.logInForm}>
                <p>Log in and Go shopping!</p>
                <LogInForm/>
                <p className={cl.loginSwitch}>or</p>
                <SignUpForm/>
                <LoginButton>Continue</LoginButton>
                {children}
            </div>
        </div>
    );
};

export default ModalLogInForm;