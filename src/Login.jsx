import React, { useState } from "react";
import GoogleLogin from "./GoogleLogin";
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const handleLoginSuccess = () => {
    navigate('/results'); // Replace '/dashboard' with the desired route path
  };

  return (
    <div className="auth-form-container">
      <h2>TRIPFUSION</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <button className="submit" type="submit" onClick={handleLoginSuccess}>
          Log In
        </button>
      </form>

      <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              handleLoginSuccess();
            }}
          
            onError={() => {
              console.log('Login Failed');
            }}
          
          />
      <button className="link-btn">
        Don't have an account yet? Register now!
      </button>
    </div>
  );
};
