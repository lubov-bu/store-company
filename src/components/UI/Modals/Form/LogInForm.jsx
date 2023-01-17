import React from 'react';
import cl from './Form.module.css';

function closeModal () {
    const modal = document.querySelector(".logInModal");
    modal.classList.toggle("active");
}


const LogInForm = () => {
    return (
        <div className={cl.logInForm}>
            <p>Log in and Go shopping!</p>
            <a href="#" className={cl.loginExit} onClick={closeModal}>x</a>
            <input type="text" placeholder="Username" className={cl.loginInput}/>
            <input type="text" placeholder="Password" className={cl.loginPassInput}/>
            <button className={cl.logInButton}>Log In</button>
        </div>
    );
};

export default LogInForm;