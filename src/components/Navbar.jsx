import styles from './Navbar.module.css';

const Navbar = ({ isNight, onToggle }) =>{
    const navClass = isNight 
    ? `${styles.navbar} ${styles.nightMode}` 
    : styles.navbar;
    
    return (
        <header className={navClass}>        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#profiles">Profiles</a>
        </nav>
        <button className={styles.toggleBtn} onClick={onToggle}>
            {isNight ? 'Day' : 'Night'}
        </button>
    </header>
    );
}

export default Navbar;