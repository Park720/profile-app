import React from 'react';
import styles from "./Card.module.css";

const Card = ({name, year, major, email, image, isNight}) => {
    const cardClass = isNight 
        ? `${styles.profileCard} ${styles.nightMode}` 
        : styles.profileCard;

    return (
        <div className={cardClass}>
            <div className={styles.top}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.bottom}>
                <p>{name}</p>
                <p>{year}</p>
                <p>{major}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;