/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./WideLogo.css";
import React from "react";
// @ts-ignore
import logo from "../../../../assets/logo.png";
function wideLogo() {
  return (
    <div className="wide-logo">
      <img src={logo} alt="Logo" />
      <h1>
        +FOCO <span>| EL FOCO DONDE IMPORTA</span>
      </h1>
    </div>
  );
}

export default wideLogo;
