import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = ({ isNight, onToggle }) =>{
    const navClass = isNight 
    ? `${styles.navbar} ${styles.nightMode}` 
    : styles.navbar;
    
    return (
        <header className={navClass}>        
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/add-profile">AddProfile</Link>
            <Link to="/other-profiles">OtherProfiles</Link>
        </nav>

        <button className={styles.toggleBtn} onClick={onToggle}>
            {isNight ? 'Day' : 'Night'}
        </button>
    </header>
    );
}

export default Navbar;