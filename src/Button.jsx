// Button.jsx
import React from 'react';
import styles from './Button.module.css';

const Button = ({ variant, children }) => {
    const buttonClass = variant === 'secondary' ? styles.secondary : styles.primary;
    return <button className={buttonClass}>{children}</button>;
};

export default Button;
