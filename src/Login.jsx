//can delete id all works
import React, { useState } from "react";
import GoogleLogin from "./GoogleLogin";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
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
        <button className="submit" type="submit">
          Log In
        </button>
      </form>

      <GoogleLogin />
      <button className="link-btn">
        Don't have an account yet? Register now!
      </button>
    </div>
  );
};
