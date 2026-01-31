import React from 'react';
import styles from './CardContainer.module.css';

const CardContainer = ({ children, isNight }) => {
    const wrapperClass = isNight 
        ? `${styles.cardContainerWrapper} ${styles.nightMode}` 
        : styles.cardContainerWrapper;

    return (
        <div className={wrapperClass}>
            <div className={styles.cardGridLayout}>
                {children}
            </div>
        </div>
    );
};

export default CardContainer;