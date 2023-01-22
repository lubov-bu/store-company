import React from 'react';
import './LogInModal.css';

const LogInModal = ({children, visible, setModal}) => {

    const rootClasses = ["logInModal"]

    if (visible) {
        rootClasses.push("active");
    }

    return (
        <div>
            <div className={rootClasses.join(' ')} onClick={() => setModal(false)}>
                {children}
            </div>
        </div>
    );
};

export default LogInModal;