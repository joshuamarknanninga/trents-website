import React, { useState } from 'react';
import './Menu.scss';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <nav className={`nav-links ${isOpen ? 'show' : ''}`}>
        <ul>
          <li>
            <a href="#hero" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#process" onClick={toggleMenu}>
              Process
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
