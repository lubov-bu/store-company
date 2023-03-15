import React from 'react';
import {useState} from "react";
import "./Form.css";
import LoginButton from "../../Buttons/LoginButton";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

const ModalLogInForm = ({children}) => {

    const [buttonText, setButtonText] = useState('Register');

    function switchModal(e) {
        /*changing text in the button*/
        setButtonText(buttonText === 'Register' ? 'Login' : 'Register');

        let signUp = document.querySelector(".signUpContent");
        let logIn = document.querySelector(".logInForm");
        /*switching modals*/
        logIn.classList.toggle("logInContent");
        signUp.classList.toggle("sign_active");

        e.preventDefault();
    }

    return (
        <div className="logInModalContent">
            <div>
                <p>Log in and Go shopping!</p>
                <LogInForm/>
                <SignUpForm/>
                <LoginButton onClick={switchModal}>{buttonText}</LoginButton>
                {children}
            </div>
        </div>
    );
};

export default ModalLogInForm;