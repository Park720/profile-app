import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';

const Navbar = ({ }) =>{
    const { theme, toggleTheme } = useContext(ModeContext);

    const navClass = theme === "dark"
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

        <button onClick={toggleTheme}>
            {theme ? 'Day' : 'Night'}
        </button>
    </header>
    );
}

export default Navbar;