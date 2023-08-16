import { React, useEffect, useState } from "react";
import { useAuth } from "../AuthContext/useAuth";
import ResultsList from "../components/ResultsList";
import { useNavigate, useLocation } from "react-router-dom";
import GetResults from "../components/GetResults";
import { NavbarSimple } from "../components/Navbar";

export const Comparisons = () => {
  const auth = useAuth();
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();

  const source = location.state;

  useEffect(() => {
    GetResults(setResults, source);
    
  }, [GetResults]);

  if (!source) {
    return <div>this is a bug</div>;
  }

  const handleClick = (data) => {
    console.log(results.length);
    navigate("/comparisoninfo", { state: {
      my: source,
      other: data,
    } });
  };

  return (
    <div>
      <NavbarSimple/>
      <ResultsList results={results} handleClick={handleClick}/>
    </div>
  );
};
