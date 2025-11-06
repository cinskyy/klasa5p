// ProductCardCss.jsx
import React from 'react';
import styles from './ProductCard.module.css';

const ProductCardCss = () => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Produkt 1</h2>
            <p className={styles.price}>$19.99</p>
            <button className={styles.button}>Kup teraz</button>
        </div>
    );
};

export default ProductCardCss;
