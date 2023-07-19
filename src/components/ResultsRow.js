import React from 'react';
import placeholderImage from '../images/island_beach_aerial_view.jpg';
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";

const ResultsRow = (props) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/packageinfo", { state: props });
  };

  return (
    <div class="py-8 px-8">
      <div class="rounded-xl overflow-hidden" onClick={handleClick}>
        <div class="grid grid-cols-3">
          <div class="col-span-1">
            <img class="h-full w-full object-cover" src={placeholderImage} alt="Card Image"/>
          </div>
          <div class="col-span-2 w-full flex flex-col items-start px-8 py-4 bg-white">
            <div class = "w-full flex flex-row justify-between">
              <h3 class="text-3xl font-semibold text-gray-600">{props.placename}</h3>
              <h3 class="text-3xl font-semibold text-gray-600">S${props.bookingprice}</h3>
            </div>
            <p class="mt-2 text-gray-600">from {props.sourcewebsite}</p>
            <Rating/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsRow;