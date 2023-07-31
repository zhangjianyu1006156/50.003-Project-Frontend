import { React, useEffect, useState } from "react";
import ResultsList from "../components/ResultsList";
import { useNavigate } from "react-router-dom";
import GetResults from "../components/GetResults";
import { NavbarSimple } from "../components/Navbar";

export const Results = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate("/packageinfo", { state: data });
  };

  useEffect(() => {
    GetResults(setResults, null);
  }, [GetResults]);

  return (
    <div>
      <NavbarSimple/>
      <ResultsList results={results} handleClick={handleClick}/>
    </div>
  );
};