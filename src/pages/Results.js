import { React, useEffect, useState } from "react";
import { useAuth } from "../AuthContext/useAuth";
import ResultsList from "../components/ResultsList";
import { useNavigate } from "react-router-dom";
import GetResults from "../components/GetResults";
import { NavbarSimple } from "../components/Navbar";

export const Results = () => {
  const auth = useAuth();
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logOut();
  };

  const handleClick = (data) => {
    navigate("/packageinfo", { state: data });
  };

  useEffect(() => {
    setResults(GetResults());
  }, []);

  return (
    <div>
      <NavbarSimple/>
      <h1 className="font-bold text-2xl">You reached results!</h1>
      <button onClick={handleLogout}>Log out</button>
      <ResultsList results={results} handleClick={handleClick}/>
    </div>
  );
};