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
    axios
      .post("http://localhost:8080/", { id: profile, key: source })
      // .post("http://172.17.0.1:8080/users/profile", { id:profile, key: source })
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
              <div class="w-full flex flex-row justify-between">
                <h3 class="text-3xl font-semibold text-gray-600">
                  {source.placename}
                </h3>
                <h3 class="text-3xl font-semibold text-gray-600">
                  S${source.bookingprice}, {source.bookingmode}
                </h3>
              </div>
              <div class="w-full flex flex-row justify-between">
                <p class="mt-2 text-gray-600">from {source.sourcewebsite}</p>
                <Rating rating={source.rating} />
              </div>
              <h3 class="text-left mt-2 text-gray-600">
                We had a meeting with the client regarding our project plan.
                Having discussed the user case documentation with the client, we
                were made aware of the importance of the use case in which we
                notify partner sites of a successful booking or cancellation. We
                did not expand on the specifics of this use case, and we will
                have to attend to it in the project plan. We informed the client
                of our intention to use the agile development system and
                discussed its suitability for their requirements. The client
                agreed that we needed to push many versions/permutations of the
                website to test and improve the features, which the agile system
                facilitates. To assure the client of the projects feasibility
                and provide a rough timeline of what and when they can expect,
                we gave them the projects schedule and intended workload
                distribution, which they said was especially detailed and well
                thought out.
              </h3>
              <div class="py-4">
                <Button color="green" onClick={handleBook}>
                  Book now
                </Button>
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
