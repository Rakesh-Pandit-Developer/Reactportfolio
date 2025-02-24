import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          John Doe
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"} end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
