import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../../../utils/button/AccessButton/AccessButton";
import { Link } from "react-router-dom";
const Login = (props: any) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        navigate("/communities");
      } else {
        const errorData = await response.json();
        console.error(errorData.error);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="access-container">
      <h2>Welcome back!</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <input
            type="email"
            name="email"
            className="access-input"
            onChange={handleInputChange}
            required
          />
          <label className="user-label">Email</label>
        </div>
        <div className="password-section">
          <div className="input-group">
            <input
              type="password"
              name="password"
              className="access-input"
              onChange={handleInputChange}
              required
            />
            <label className="user-label">Password</label>
          </div>
          <a href="#" className="frg-pass">
            Forgot password?
          </a>
        </div>
        <LoginButton color="black" width="17rem" text="Login" />
        <p className="register-link">
          Not a member? <Link to="/register">Register NOW!</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
