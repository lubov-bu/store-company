import React from 'react';
import "./Form.css";
import LoginButton from "../../Buttons/LoginButton";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

const ModalLogInForm = ({children}) => {

    function switchModal(e) {
        let signUp = document.querySelector(".signUpContent");
        let logIn = document.querySelector(".logInForm");

        logIn.classList.add("logInContent");
        signUp.classList.add("sign_active");

        e.preventDefault();
    }

    return (
        <div className="logInModalContent">
            <div>
                <p>Log in and Go shopping!</p>
                <LogInForm/>
                <SignUpForm/>
                <LoginButton onClick={switchModal}>Register</LoginButton>
                {children}
            </div>
        </div>
    );
};

export default ModalLogInForm;