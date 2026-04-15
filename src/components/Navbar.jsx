import React from 'react';
import logoIcon from '../icons/logo-icon.jpg';

const Navbar = () => {
  return (
    <header>
      <div className="heading">
        <a className="icon" href="#">
          <img className="icon-img" src={logoIcon} alt="Logo" />
          <p className="ansormed">AnsorMed</p>
        </a>
        <nav>
          <ul>
            <li><a href="#">XIZMATLAR</a></li>
            <li><a href="#">DORILAR</a></li>
            <li><a href="#">ASAL</a></li>
            <li><a href="#">KONTAKTLAR</a></li>
            <li><a href="#">BLOG</a></li>
          </ul>
        </nav>
        <button className="btn1">QABULGA YOZILISH</button>
      </div>
    </header>
  );
};

export default Navbar;