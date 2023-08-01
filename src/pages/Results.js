import { React, useEffect, useState } from "react";
import ResultsList from "../components/ResultsList";
import { useNavigate, useLocation } from "react-router-dom";
import GetResults from "../components/GetResults";
import { NavbarSimple } from "../components/Navbar";

export const Results = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  //access search info using location.state.[dest, data, budget]

  const handleClick = (data) => {
    navigate("/packageinfo", { state: data });
  };

  useEffect(() => {
    GetResults(setResults, null, location.state);
    console.log(location.state);
  }, [GetResults]);

  return (
    <div>
      <NavbarSimple />
      <ResultsList results={results} handleClick={handleClick} />
    </div>
  );
};
