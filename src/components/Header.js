import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-text">Apna Clone Logo</span>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#companies">Companies</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#resources">Resources</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;