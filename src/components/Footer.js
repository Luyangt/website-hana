import React from "react";
import "../styles/Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="address">
          <p>Yucong Hua</p>
          <p>Univeristy of Pennsylvania</p>
        </div>

        <div className="contact info">
          <p>huayucong1996@gmail.com</p>
        </div>
        
        <a
          href="https://github.com/huyuluku"
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/GitHub-logo.png"
            alt="GitHub"
            className="github-icon"
          />
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;