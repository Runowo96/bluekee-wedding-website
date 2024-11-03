import React, { useEffect } from "react";
import "./NavBar.scss";
import menuIcon from "../../assets/icons/menu-icon.svg";
import logo from "../../assets/logos/bk-logo.svg";

function NavBar({ isOpen, setIsOpen, sections, scrollToSection }) {
  // Disable body scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleItemClick = (sectionRef) => {
    scrollToSection(sectionRef);
    setIsOpen(false); // Close menu after navigating
  };

  // Render menu items
  const renderMenuItems = () => (
    <>
      <li className="navbar__list-item">
        <h2
          className="navbar__list-item-text"
          onClick={() => handleItemClick(sections.packagesRef)}
        >
          Packages
        </h2>
      </li>
      <li className="navbar__list-item">
        <h2
          className="navbar__list-item-text"
          onClick={() => handleItemClick(sections.productLinesRef)}
        >
          A La Carte
        </h2>
      </li>
      <li className="navbar__list-item">
        <h2
          className="navbar__list-item-text"
          onClick={() => handleItemClick(sections.artistsRef)}
        >
          The Artists
        </h2>
      </li>
      <li className="navbar__list-item">
        <h2
          className="navbar__list-item-text"
          onClick={() => handleItemClick(sections.contactUsRef)}
        >
          Contact Us
        </h2>
      </li>
    </>
  );

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

      {/* Mobile Dropdown Menu */}
      {isOpen && <ul className="navbar__dropdown-ul">{renderMenuItems()}</ul>}

      {/* Desktop Navigation */}
      <ul className="navbar__dropdown-ul-desktop">{renderMenuItems()}</ul>
    </div>
  );
}

export default NavBar;
