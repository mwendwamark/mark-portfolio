import React from "react";
import { Link } from "react-router-dom";
import "./App.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <li>
        {" "}
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </nav>
  );
};

export default Navbar;
