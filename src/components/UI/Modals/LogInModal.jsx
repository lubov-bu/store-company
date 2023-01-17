import React from 'react';
import './LogInModal.css';

const LogInModal = ({children, visible}) => {

    const rootClasses = ["logInModal"]

    if (visible) {
        rootClasses.push("active");
    }

    return (
        <div>
            <div className={rootClasses.join(' ')}>
                <div className="logInModalContent">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LogInModal;