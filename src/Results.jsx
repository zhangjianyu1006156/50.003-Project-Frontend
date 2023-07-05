import React from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

export const Results = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logOut();
    navigate("/");
  };

  return (
    <div>
      <h1>You reached results!</h1>
      <h3>Welcome {auth.profile.name} </h3>
      <p>Name: {auth.profile.name}</p>
      <p>Email Address: {auth.profile.email}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};
