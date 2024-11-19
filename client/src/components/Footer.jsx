import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-links">
        <a href="#hero">Home</a>
        <a href="#process">Process</a>
        <a href="#contact" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
          Contact
        </a>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="FaFacebookSquare"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="FaTwitterSquare">
          <i className="FaTwitterSquare"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="FaLinkedin">
          <i className="FaLinkedin"></i>
        </a>
      </div>
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} Sustainable Process. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
