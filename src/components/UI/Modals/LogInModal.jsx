import React from 'react';
import cl from './LogInModal.module.css'

const LogInModal = ({children}) => {
    return (
        <div>
            <div className={[cl.logInModal, cl.logInModalActive].join(' ')}>
                <div className={cl.logInModalContent}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LogInModal;