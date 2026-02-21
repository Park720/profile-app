import React, { useRef, useLayoutEffect, useState } from 'react';
import styles from "./Card.module.css";

const Card = ({name, year, major, email, image, isNight}) => {
    const cardClass = isNight 
        ? `${styles.profileCard} ${styles.nightMode}` 
        : styles.profileCard;

    const cardRef = useRef(null);  
    const [fontSize, setFontSize] = useState(14);

    useLayoutEffect(() => {  
        if (cardRef.current) {
            const width = cardRef.current.offsetWidth;
            if (width < 150) {
                setFontSize(10);
            } else if (width < 200) {
                setFontSize(12);
            } else {
                setFontSize(14);
            }
        }
    }, []);

    return (
        <div className={cardClass} ref={cardRef}> 
            <div className={styles.top}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.bottom} style={{ fontSize: `${fontSize}px` }}>
                <p>{name}</p>
                <p>{year}</p>
                <p>{major}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;