import React from 'react';
import './Header.scss';

const Header = () => (
  <header className="header">
    <h1 className="header-title">Sustainable Process</h1>
    <nav className="header-menu">
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
