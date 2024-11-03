import React from "react";
import "./Footer.scss";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa"; // Social media icons

function Footer({ scrollToSection, sections }) {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo-section">
          <h2 className="footer__logo">Blue Kee Design Co.</h2>
          <p className="footer__tagline">Crafting Memories, One Detail at a Time</p>
        </div>
        
        <div className="footer__links-section">
          <h3 className="footer__title">Explore</h3>
          <ul className="footer__links">
            <li onClick={() => scrollToSection(sections.packagesRef)}>Packages</li>
            <li onClick={() => scrollToSection(sections.productLinesRef)}>A La Carte</li>
            <li onClick={() => scrollToSection(sections.artistsRef)}>The Artists</li>
            <li onClick={() => scrollToSection(sections.contactUsRef)}>Contact Us</li>
          </ul>
        </div>

        <div className="footer__contact-section">
          <h3 className="footer__title">Contact Us</h3>
          <p>Email: <a href="mailto:bluekeedesign@gmail.com">bluekeedesignco@gmail.com</a></p>
          <p>Location: Toronto, Ontario</p>
          <div className="footer__socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com/bluekeedesign" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} Blue Kee Design Co. | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
