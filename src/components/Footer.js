import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Apna Clone. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;