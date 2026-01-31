import React from 'react';
import styles from './About.module.css';

function About({ isNight }) {
    const sectionClass = isNight 
        ? `${styles.aboutSection} ${styles.nightMode}` 
        : styles.aboutSection;

    return (
        <div className={sectionClass}>
            <h1>Profile App</h1>
            <h2>About</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                ea commodo consequat.
            </p>
        </div>
    );
}

export default About;