import React from 'react';
import './LogInModal.css';
import cl from "./Form/Form.module.css";

const LogInModal = ({visible, setVisible}) => {

    const rootClasses = ["logInModal"]

    if (visible) {
        rootClasses.push("active");
    }

    return (
        <div>
            <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
                <div className="logInModalContent">
                    <div className={cl.logInForm}>
                        <p>Log in and Go shopping!</p>
                        <button className={cl.loginExit} onClick={() => setVisible(false)}>x</button>
                        <input type="text" placeholder="Username" className={cl.loginInput}/>
                        <input type="text" placeholder="Password" className={cl.loginPassInput}/>
                        <button className={cl.logInButton}>Log In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogInModal;