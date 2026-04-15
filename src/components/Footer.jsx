import React from 'react';
import logoIcon from '../icons/logo-icon.jpg';

const Footer = () => {
  return (
    <footer>
      <div className="heading1">
        <a className="icon1" href="#">
          <img className="icon-img1" src={logoIcon} alt="Logo" />
          <p className="ansormed1">AnsorMed</p>
        </a>
        <nav>
          <ul>
            <li><a className="a1" href="#">XIZMATLAR</a></li>
            <li><a className="a1" href="#">DORILAR</a></li>
            <li><a className="a1" href="#">ASAL</a></li>
            <li><a className="a1" href="#">KONTAKTLAR</a></li>
            <li><a className="a1" href="#">BLOG</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;