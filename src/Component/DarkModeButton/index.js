import React, { useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext'

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode(); // Toggle the dark mode state
  };

  return (
    <button onClick={handleClick}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeButton;