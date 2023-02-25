import React from 'react';
import cl from './Button.module.css';

const Button = ({children, ...props}) => {
    return (
        <a href="#" {...props} className={cl.button}>
            {children}
        </a>
    );
};

export default Button;