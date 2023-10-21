/* eslint-disable no-unused-vars */
import React from "react";
// @ts-ignore
import twitterLogo from "../../assets/twitter-icon-18-256.png";
// @ts-ignore
import facebookLogo from "../../assets/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png--32.png";
// @ts-ignore
import instagramLogo from "../../assets/new-Instagram-logo-white-glyph.png";
import "./Footer.css";
import Logo from "../utils/logo/wide/WideLogo";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="linea-footer"></div>
      </div>
      <div className="footer-bottom">
        <Logo />
        <div className="social-media">
          <p>REDES SOCIALES:</p>
          <a
            href="https://facebook.com/masFoco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookLogo} alt="twitterLogo" />
          </a>
          <a
            href="https://twitter.com/masFoco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterLogo} alt="twitterLogo" />
          </a>
          <a
            href="https://www.instagram.com/masFoco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="instagramLogo" />
          </a>
        </div>
        <div className="contact-info">
          Teléfono: <a href="tel:+123456789">(+123) 456 789</a>
          <br />
          Dirección:{" "}
          <a
            href="https://maps.google.com/direccion"
            target="_blank"
            rel="noopener noreferrer"
          >
            Canelones 1162, Montevideo
          </a>
          <br />
          Correo: <a href="mailto:contacto@masfoco.com">contacto@masfoco.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
