import React from "react";
import "./Register.css"
class Register extends React.Component {
    render() {
      return (
        <div className="registerContainer">
          <h2>Login</h2>
          <input type="text" placeholder="USER" className="textAccInp" id="userInp"/>
          <input type="password" placeholder="PASSWORD" className="textAccInp" />
          <input type="password" placeholder="CONFIRM PASSWORD" className="textAccInp" />
          <button value="Sign in"></button>
        </div>
      );
    }
  }
  
  export default Register;