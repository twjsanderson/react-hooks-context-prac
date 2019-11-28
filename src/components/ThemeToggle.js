import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { ToggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={ToggleTheme}>Toggle Theme</button>
    )
}

export default ThemeToggle;