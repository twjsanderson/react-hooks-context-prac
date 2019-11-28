import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const { theme } = useContext(ThemeContext);
    let styles = theme.isLightTheme ? theme.light : theme.dark;
    
    return (
        <nav style={{ background: styles.ui, color: styles.syntax}}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                { isAuthenticated ? 'Logged In' : 'Logged Out' }
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
};

export default Navbar;