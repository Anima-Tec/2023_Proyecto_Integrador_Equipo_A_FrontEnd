import React from 'react';
import "./Login.css"
class Login extends React.Component {
  render() {
    return (
      <div className="loginContainer">
        <h2>Login</h2>
        <input type="text" placeholder="USER" className="textAccInp" id="userInp"/>
        <input type="password" placeholder="PASSWORD" className="textAccInp"  />
        <button value="Login"></button>
        <a href="#" id="frgPass">FORGOT PASSWORD?</a>
        <a href="#" id="frgPass">ARE YOU NOT REGISTERED?</a>
      </div>
    );
  }
}

export default Login;