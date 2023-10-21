/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./NarrowLogo.css";
// @ts-ignore
import logo from "../../../../assets/logo.png";
function NarrowLogo() {
  return (
    <div className="narrow-logo">
      <img src={logo} alt="Logo" />
      <h1>+FOCO</h1>
    </div>
  );
}

export default NarrowLogo;
