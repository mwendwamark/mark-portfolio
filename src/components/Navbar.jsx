import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      
      <li className="navbar-li">
        <Link to="/" smooth={true.toString()} duration={500}>Home</Link>
      </li>
      <li className="navbar-li">
        <Link to="/about" smooth={true.toString()} duration={500}>About</Link>
      </li>
      <li className="navbar-li">
        <Link to="/projects" smooth={true.toString()} duration={500}>Projects</Link>
      </li>
    </nav>
  );
}

export default Navbar;
