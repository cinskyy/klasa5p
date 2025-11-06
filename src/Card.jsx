// Card.jsx
import React from 'react';
import styles from './Card.module.css';

const Card = () => {
    return (
        <div className={styles.card}>
            <h2 className={`${styles.title} ${styles.bold}`}>Nagłówek karty</h2>
            <p className={styles.paragraph}>Opis karty</p>
            <button className={styles.button}>Kliknij</button>
        </div>
    );
};

export default Card;
