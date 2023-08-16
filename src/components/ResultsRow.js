import React from 'react';
import placeholderImage from '../images/island_beach_aerial_view.jpg';
import Rating from "./Rating";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const ResultsRow = (props) => {

  // const handleClick = () => {
  //   navigate("/packageinfo", { state: props });
  // };

  const data =
  {
    key:props.product_id,
    id: props.product_id,
    placename: props.name, //name
    bookingprice: props.price, //bookingprice
    sourcewebsite: props.sourcewebsite,
    image: props.image,
    rating: props.rating,
    text: props.description, //text
    bookingmode: props.bookingmode,
  };

  const handleClick = () => {
    props.handleClick(data)
  };

  return (
    <div className='py-4'>
    <Card className="w-full max-w-[48rem] flex-row cursor-pointer" onClick={handleClick}>
    <CardHeader
      shadow={false}
      floated={false}
      className="m-0 w-2/5 shrink-0 rounded-r-none"
    >
      <img
        src={data.image}
        alt="card-image"
        className="h-full w-full object-cover"
      />
    </CardHeader>
    <CardBody className="w-full flex flex-col items-start px-4 py-2">
      <div className = "w-full flex flex-row justify-between">
        <h3 className="text-2xl font-semibold text-gray-600">{data.placename}</h3>
        <h3 className="text-2xl font-semibold text-gray-600">S${data.bookingprice}</h3>
      </div>
      <p class="mt-2 text-gray-600">from {data.sourcewebsite}</p>
      <Rating rating = {data.rating}/>
    </CardBody>
  </Card>
  </div>
  );

  // return (
  //   <div class="py-8 px-8">
  //     <div class="rounded-xl overflow-hidden" onClick={handleClick}>
  //       <div class="grid grid-cols-3">
  //         <div class="col-span-1">
  //           <img class="h-full w-full object-cover" src={placeholderImage} alt="Card Image"/>
  //         </div>
  //         <div class="col-span-2 w-full flex flex-col items-start px-8 py-4 bg-white">
  //           <div class = "w-full flex flex-row justify-between">
  //             <h3 class="text-3xl font-semibold text-gray-600">{data.placename}</h3>
  //             <h3 class="text-3xl font-semibold text-gray-600">S${data.bookingprice}</h3>
  //           </div>
  //           <p class="mt-2 text-gray-600">from {data.sourcewebsite}</p>
  //           <Rating/>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default ResultsRow;