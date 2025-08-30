import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="App">
      {/* your app content here */}

      <footer className="footer">
        This project was built as a personal showcase of React & API integration
        skills. Deployed on{" "}
        <a href="https://vercel.com" target="_blank" rel="noreferrer">
          Vercel
        </a>
        .
      </footer>
    </div>
  );
};

export default Footer;
