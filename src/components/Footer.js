import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;