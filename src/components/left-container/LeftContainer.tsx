/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Login from "../LeftContainerContent/Home/login/Login.js";
import Register from "../LeftContainerContent/Home/register/Register.js";
import Communities from "../LeftContainerContent/Home/comunity/Communities.js";
import "./LeftContainer.css";
import Category from "../LeftContainerContent/Reports/category/Category.js";

function WideLeftContainer(props: any) {
  const valor = props.valor;
  const isWide = props.isWide;
  switch (valor) {
    case "Login": {
      return (
        <div className="left-container" id="wide-left-container">
          <Login />
        </div>
      );
    }
    case "Register": {
      return (
        <div className="left-container" id="wide-left-container">
          <Register />
        </div>
      );
    }
    case "Communities": {
      return (
        <div className="left-container" id="wide-left-container">
          <Communities />
        </div>
      );
    }
    case "Reports": {
      return (
        <div className="left-container" id="narrow-left-container">
          <Category />
        </div>
      );
    }
  }
}
export default WideLeftContainer;
