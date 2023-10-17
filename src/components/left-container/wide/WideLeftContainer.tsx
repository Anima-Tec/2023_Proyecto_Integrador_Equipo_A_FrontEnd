/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Login from "../../access/login/Login.js";
import Register from "../../access/register/Register.js";
import "./WideLeftContainer.css";
function WideLeftContainer(props: any) {
  const content = props.content;
  return (
    <>
      <div className="accessContainer">
        {props.valor === "Login" ? <Login /> : props.valor === "Register" ? <Register /> : <Login />}
      </div>
    </>
  )
}

export default WideLeftContainer;
