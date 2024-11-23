// client/src/components/Footer.jsx
import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner py-6">
      <div className="container mx-auto text-center">
        <p className="text-gray-700">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            <FaFacebookSquare size={30} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            <FaTwitterSquare size={30} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
