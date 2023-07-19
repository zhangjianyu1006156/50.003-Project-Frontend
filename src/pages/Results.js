import React, { useState, useEffect } from "react";
import ResultsList from "../components/ResultsList"

export default function Results(){

    const [results, setResults] = useState([]);

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

    return(
        <div className="container main content">
            <ResultsList results={results}/>
        </div>
    );
}