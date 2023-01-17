import React from 'react';
import './LogInModal.css';

const LogInModal = ({children, visible, setVisible}) => {

    const rootClasses = ["logInModal"]

    if (visible) {
        rootClasses.push("active");
    }

    return (
        <div>
            <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
                <div className="logInModalContent">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LogInModal;