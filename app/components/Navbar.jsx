'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setDarkMode(savedTheme === 'dark');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="brand">Subhasini Ravikumar</a>
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle dark mode">
          <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
        </button>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Personal</a></li>
          <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</a></li>
          <li><a href="#goals" onClick={() => setMenuOpen(false)}>Goals</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
