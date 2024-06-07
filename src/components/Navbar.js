// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; // Sesuaikan path sesuai struktur proyek Anda

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/">Recipe Finder</Link>
    </div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/recipes">Recipes</Link></li>
    </ul>
  </nav>
);

export default Navbar;
