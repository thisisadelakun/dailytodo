import React, { useState, useEffect } from 'react';
import './Theme.css'

// import data
import { icons } from '../database/db';

const Theme = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('mode');
    setIsNightMode(storedMode === 'night');
  }, []);

  const toggleMode = () => {
    setIsNightMode(prevMode => !prevMode);
    localStorage.setItem('mode', isNightMode ? 'day' : 'night');
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', !isNightMode);
    document.body.classList.toggle('light-mode', isNightMode);
  }, [isNightMode]);

  return (
    <div>
      <button
        className={`theme-button ${isNightMode ? 'dark-mode' : 'light-mode'}`}
        onClick={toggleMode}
      >
        {isNightMode ? icons.moon : icons.sun}
      </button>
    </div>
  )
}

export default Theme