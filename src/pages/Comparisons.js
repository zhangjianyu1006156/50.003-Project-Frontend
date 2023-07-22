import { React, useEffect, useState } from "react";
import { useAuth } from "../AuthContext/useAuth";
import ResultsList from "../components/ResultsList";
import { useNavigate, useLocation } from "react-router-dom";
import GetResults from "../components/GetResults";

export const Comparisons = () => {
  const auth = useAuth();
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();

  const source = location.state;

  useEffect(() => {
    const filtered = GetResults().filter(item => item.id !== source.id);
    setResults(filtered);
  }, []);

  if (!source) {
    return <div>this is a bug</div>;
  }

  const handleClick = (data) => {
    navigate("/comparisoninfo", { state: {
      my: source,
      other: data,
    } });
  };

  return (
    <div>
      <ResultsList results={results} handleClick={handleClick}/>
    </div>
  );
};
