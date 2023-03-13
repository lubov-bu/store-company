import React from 'react';
import cl from "./Form.module.css";
import LoginButton from "../../Buttons/LoginButton";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

const ModalLogInForm = ({children}) => {

    function switchModal(e) {
        let signUp = document.getElementsByClassName(".signUpForm");
        signUp.classList.add(".sign_active");
        e.preventDefault();
    }

    return (
        <div className="logInModalContent">
            <div className={cl.logInForm}>
                <p>Log in and Go shopping!</p>
                <LogInForm/>
                <LoginButton onClick={switchModal}>Register</LoginButton>
                <SignUpForm/>
                {children}
            </div>
        </div>
    );
};

export default ModalLogInForm;