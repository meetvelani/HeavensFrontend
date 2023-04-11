import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo"></div>
        <div className="menu-icon" onClick={handleShowNavbar}></div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>demo</li>
            <li>demo</li>
            <li>demo</li>
            <li>demo</li>
            <li>demo</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
