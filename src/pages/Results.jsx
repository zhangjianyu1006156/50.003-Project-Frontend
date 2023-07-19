import { React, useEffect, useState } from "react";
import { useAuth } from "../AuthContext/useAuth";
import ResultsList from "../components/ResultsList";

export const Results = () => {
  const auth = useAuth();
  const [results, setResults] = useState([]);

  const handleLogout = () => {
    auth.logOut();
  };

  useEffect(() => {
    // async
    // api here
    const resultsTest = [
      {
        id: 1,
        placename: "Fuji-Q Highland",
        bookingprice: "60.00",
        sourcewebsite: "Klook",
      },
      {
        id: 2,
        placename: "Fuji-Q Highland",
        bookingprice: "55.00",
        sourcewebsite: "Trip.com",
      },
    ];
    setResults(resultsTest);
  }, []);

  return (
    <div>
      <h1 className="font-bold text-2xl">You reached results!</h1>
      <button onClick={handleLogout}>Log out</button>
      <ResultsList results={results} />
    </div>
  );
};
