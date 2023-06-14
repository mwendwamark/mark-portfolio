import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <li className="navbar-li">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-li">
        <Link to="/about">About</Link>
      </li>
      <li className="navbar-li">
        <Link to="/projects">Projects</Link>
      </li>
    </nav>
  );
}

export default Navbar;
