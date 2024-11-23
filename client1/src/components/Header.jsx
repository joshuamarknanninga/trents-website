// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">Your Company</div>
        <ul className="flex space-x-4">
          <li><a href="#hero" className="text-gray-700 hover:text-blue-500">Home</a></li>
          <li><a href="#services" className="text-gray-700 hover:text-blue-500">Services</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
