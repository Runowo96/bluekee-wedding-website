import React, { useState } from "react";
import "./NavBar.scss";
import menuIcon from "../../assets/icons/menu-icon.svg";
import logo from "../../assets/logos/logo.PNG";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <button onClick={() => setIsOpen(!isOpen)} className="navbar__menu-btn">
        <img
          className="navbar__menu-img"
          src={menuIcon}
          alt="menu button icon"
        />
      </button>
      <img className="navbar__logo-img" src={logo} alt="Blue Kee Design logo" />
      {isOpen && (
        <ul className="navbar__dropdown-ul">
          <li className="navbar__list-item">
            <h2 className="navbar__list-item-text" onClick={() => setIsOpen(!isOpen)}>Home</h2>
          </li>
          <li className="navbar__list-item">
            <h2 className="navbar__list-item-text" onClick={() => setIsOpen(!isOpen)}>Packages</h2>
          </li>
          <li className="navbar__list-item">
            <h2 className="navbar__list-item-text" onClick={() => setIsOpen(!isOpen)}>A La Carte</h2>
          </li>
          <li className="navbar__list-item">
            <h2 className="navbar__list-item-text" onClick={() => setIsOpen(!isOpen)}>The Artists</h2>
          </li>
          <li className="navbar__list-item">
            <h2 className="navbar__list-item-text" onClick={() => setIsOpen(!isOpen)}>Contact Us</h2>
          </li>
        </ul>
      )}
      <ul className="navbar__dropdown-ul-desktop">
          <li className="navbar__list-item">
            <h2 className="navbar__list-item-text" >Home</h2>
          </li>
          <li className="navbar__list-item">
            <h2 className="navbar__list-item-text" >Packages</h2>
          </li>
          <li className="navbar__list-item">
            <h2 className="navbar__list-item-text" >A La Carte</h2>
          </li>
          <li className="navbar__list-item">
            <h2 className="navbar__list-item-text" >The Artists</h2>
          </li>
          <li className="navbar__list-item">
            <h2 className="navbar__list-item-text" >Contact Us</h2>
          </li>
        </ul>
    </div>
  );
}

export default NavBar;
