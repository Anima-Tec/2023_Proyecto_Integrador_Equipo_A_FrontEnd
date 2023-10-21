import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterButton from "../../../utils/button/AccessButton/AccessButton";
import { Link } from "react-router-dom";
const Register = (props: any) => {
  const navigate = useNavigate();
  const [confirmPassw, setConfirmPassw] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.password !== confirmPassw.toString()) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/");
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
  const handleConfirmInputChange = (e: any) => {
    const { value } = e.target;
    setConfirmPassw(value);
  };
  return (
    <div className="access-container">
      <h2>New Member</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            className="access-input"
            onChange={handleInputChange}
            required
          />
          <label className="user-label">Username</label>
        </div>
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
          <div className="input-group" id="confirm-pssw">
            <input
              type="password"
              name="confirmPassword"
              className="access-input"
              onChange={handleConfirmInputChange}
              required
            />
            <label className="user-label">Confirm password</label>
          </div>
        </div>
        <RegisterButton color="black" width="17rem" text="Register" />
        <p className="register-link">
          Are you a member? <Link to="/">Login NOW!</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
