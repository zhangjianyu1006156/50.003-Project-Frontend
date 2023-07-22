import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import Rating from "../components/Rating";
import { Button } from "@material-tailwind/react";
import { useLocation, useNavigate } from 'react-router-dom';

export const ComparisonInfo = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const source = location.state;

    const handleBook = () => {
    };

    const handleCompare = () => {
      navigate("/comparisons", { state: source });
    };

    if (!source) {
      return <div>this is a bug</div>;
    }

    return(
        <div class="py-8 px-24 w-full">
        <div class="rounded-xl overflow-hidden w-full">
          <div class="grid grid-rows-3 w-full">
            <div class="row-span-1 w-full">
              {/* <img class="h-full w-full object-cover" src={placeholderImage} alt="Card Image"/> */}
              <ImageCarousel class="w-full"/>
            </div>
            <div class="row-span-2 w-full flex flex-col items-start px-8 py-4 bg-white">
              <div class = "w-full flex flex-row justify-between">
                <h3 class="text-3xl font-semibold text-gray-600">{source.placename}</h3>
                <h3 class="text-3xl font-semibold text-gray-600">S${source.bookingprice}</h3>
              </div>
              <p class="mt-2 text-gray-600">from {source.sourcewebsite}</p>
              <Rating/>
              <Button color="green" onClick={handleBook}>Book now</Button>
              <Button color="green" onClick={handleCompare}>Compare</Button>
            </div>
          </div>
        </div>
      </div>
    )
}