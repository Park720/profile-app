import React from 'react';
import styles from './Filters.module.css'; 

const Filters = ({ majors, major, name, handleMajor, years, year, handleYear, handleSearch, handleClear, isNight }) => {
    const containerClass = isNight 
        ? `${styles.filterContainer} ${styles.nightMode}` 
        : styles.filterContainer;

    return (
        <div className={containerClass}>
            <div className={styles.filterDropdown}>
                <label htmlFor="major">Select a Major:</label>
                <select id="major" value={major} onChange={handleMajor}>
                    <option value="">All</option>
                    {
                        majors.map((m) => (
                            <option key={m} value={m}>{m}</option>
                        ))
                    }
                </select>
            </div>
            <div className={styles.filterDropdown}>
                <label htmlFor="year">Select a Year:</label>
                <select id="year" value={year} onChange={handleYear}>
                    <option value="">All</option>
                    {
                        years.map((y) => (
                            <option key={y} value={y}>{y}</option>
                        ))
                    }
                </select>
            </div>
            <div className={styles.filterSearch}>
                <label htmlFor="search">Search a Name:</label>
                <input 
                    id="search" 
                    onChange={handleSearch} 
                    value={name} 
                />  
            </div>
            <div className={styles.filterClear}>
                <button onClick={handleClear}>Clear Filters</button>
            </div>
        </div>
    );
}

export default Filters;