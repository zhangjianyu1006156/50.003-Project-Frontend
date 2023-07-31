import React from "react";
import { useLocation } from "react-router-dom";
import ComparisonCard from "../components/ComparisonCard";
import { NavbarSimple } from "../components/Navbar";

export const ComparisonInfo = () => {

    const location = useLocation();

    const source = location.state;
  
    if (!source) {
      return <div>this is a bug</div>;
    }

    return(
        <div>
        <NavbarSimple/>
        <div className="flex justify-center items-center h-screen">
            <div className="flex space-x-8">
                <ComparisonCard my={source.my} other={source.other}/>
                <ComparisonCard my={source.other} other={source.my}/>
            </div>
        </div>
        </div>
    )
}