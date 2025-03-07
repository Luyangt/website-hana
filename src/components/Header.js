import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/MainPage/logo.png"></img>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/research">Research</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/activities">Activities</Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;