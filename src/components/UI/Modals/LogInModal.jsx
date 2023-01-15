import React from 'react';
import cl from './LogInModal.module.css'

const LogInModal = ({children, visible}) => {

    const rootClasses = [cl.logInModal]

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div>
            <div className={rootClasses.join(' ')}>
                <div className={cl.logInModalContent}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LogInModal;