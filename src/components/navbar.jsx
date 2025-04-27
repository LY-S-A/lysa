import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#hero" className="nav-logo">LYΣA</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;