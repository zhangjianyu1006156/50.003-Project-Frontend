import { React, useEffect, useState } from "react";
import ResultsList from "../components/ResultsList";
import { useNavigate, useLocation} from "react-router-dom";
import GetResults from "../components/GetResults";
import { NavbarSimple } from "../components/Navbar";

export const Results = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (data) => {
    navigate("/packageinfo", { state: data });
  };

  useEffect(() => {
    GetResults(setResults, null, location.state);
    console.log(location.state);
  }, [location.state]);

  return ( 
    <div className="overflow-scroll overflow-hidden"> 
      <NavbarSimple /> 
      <div className="py-16"></div> 
      <ResultsList className="overflow-hidden" results={results} handleClick={handleClick} /> 
    </div> 
  );
};