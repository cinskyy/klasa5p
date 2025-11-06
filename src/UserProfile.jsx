// UserProfile.jsx
import React from 'react';
import styles from './UserProfile.module.css';

const UserProfile = () => {
    return (
        <div className={styles.card}>
            <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Profile"
                className={styles.profileImage}
            />
            <h2 className={styles.name}>Jan Kowalski</h2>
            <p className={styles.description}>Programista frontendowy z pasją do nowych technologii.</p>
        </div>
    );
};

export default UserProfile;
