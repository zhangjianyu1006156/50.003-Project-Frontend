import React from "react";
import ResultsRow from "../components/ResultsRow";

export default function Results(){
    return(
        <div className="container main content">
            <h1>You reached results!</h1>
            <ResultsRow />
            <ResultsRow />
        </div>
    )
}