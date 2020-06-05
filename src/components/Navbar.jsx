import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {
  const [ toggleMode, darkMode]  = useDarkMode('darkModeToggle', {darkMode: false})
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode }
          name = 'darkModeToggle'
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};


export default Navbar;
