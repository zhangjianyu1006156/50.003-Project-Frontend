import React from "react";
import { useAuth } from "./useAuth";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const Results = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout();
    auth.logOut();
    localStorage.clear();
  };

  return (
    <div>
      <h1 className="font-bold text-2xl">You reached results!</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};
