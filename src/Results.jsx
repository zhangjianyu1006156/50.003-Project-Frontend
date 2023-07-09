import React from "react";
import { useAuth } from "./Auth";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const Results = () => {
  const auth = useAuth();
  // const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout();
    auth.logOut();
    // navigate("/");
  };

  return (
    <div>
      <h1>You reached results!</h1>
      <h1>Welcome {auth.profile.name} </h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};
