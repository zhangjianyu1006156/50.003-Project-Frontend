import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import Rating from "../components/Rating";
import { Button } from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarSimple } from "../components/Navbar";
import { useAuthContext } from "../AuthContext/Auth";
import axios from "axios";

export const PackageInfo = () => {
  const navigate = useNavigate();

  const location = useLocation();

    const source = location.state;
    const { profile } = useAuthContext();

    const handleBook = () => {
      // var srce =""
      // if klook_price<tripcom_price{
      //   srce = klook
      // }
      // else{
      //   srce = tripcom
      // }
      // const result = {
      //   id: source.product_id,
      //   placename: source.name,
      //   bookingprice: Math.min(source.kkdays_price, source.tripcom_price),
      //   sourcewebsite: srce,
      //   images:source.image,
      //   product_details:source,
      // }
      const result = {id:profile, key:source}
      axios
      //.post("http://localhost:8080/", { id: profile, key: source })
      .post("http://188.166.191.110.nip.io:8080/users/book", { data: result })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      // try{
      //   const response = await axios.post('/users');
      //   console.log("Booking successful!")

    //   navigate("/booking");
    //   return response.data;
    // } catch (error) {
    //   console.error('Failed to perform booking', error);
    //   return [];
    // }
  };

    const handleCompare = () => {
      navigate("/comparisons", { state: source });
    };
    console.log("source here")
    console.log(source);

    if (!source) {
      return <div>this is a bug</div>;
    }

  return (
    <div>
      <NavbarSimple />
      <div class="py-8 px-24 w-full">
        <div class="rounded-xl overflow-hidden w-full">
          <div class="w-full">
            <div class="w-full">
              {/* <img class="h-full w-full object-cover" src={placeholderImage} alt="Card Image"/> */}
              <ImageCarousel class="w-full" />
            </div>
            <div class="w-full flex flex-col items-start px-8 py-4 bg-white">
              <div class = "w-full flex flex-row justify-between">
                <h3 class="text-3xl font-semibold text-gray-600">{source.placename}</h3>
                <h3 class="text-3xl font-semibold text-gray-600">S${source.bookingprice}</h3>
              </div>
              <div class="w-full flex flex-row justify-between">
                <p class="mt-2 text-gray-600">from {source.sourcewebsite}</p>
                {/* <Rating rating={source.rating}/> */}
              </div>
              <h3 class="text-left mt-2 text-gray-600">{source.text}</h3>
              <div class="py-4">
              <Button color="green" onClick={handleBook}>Book now</Button>
              </div>
              <div class="pb-4">
                <Button color="green" onClick={handleCompare}>
                  Compare
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
