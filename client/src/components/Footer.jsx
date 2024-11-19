import React from 'react';
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
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} Sustainable Process. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
