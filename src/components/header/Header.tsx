/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from '../utils/button/Button.js';
import Logo from '../utils/logo/wide/wideLogo.js'
import './Header.css'
const Header = (props: any) => {
  return (
    <header>
      <div className='headerLogoContainer'>
        <Logo />
      </div>
      <div className="headerContainer">
        <div className='headerLinks'>
          {props.valor === "Home" ? <Button value="Home" className="nav-button" id="activo"/> : <Button value="Home" className="nav-button" />}
          {props.valor === "About us" ? <Button value="About us" className="nav-button" id="activo"/> : <Button value="About us" className="nav-button" />}
          {props.valor === "Reports" ? <Button value="Reports" className="nav-button" id="activo"/> : <Button value="Reports" className="nav-button" />}
        </div>
        <div className="linea"></div>
        <input type="button" value="Login" className="login-button" />
      </div>
    </header>
  );
};

export default Header;