import React, {useState, useEffect } from "react";
import { NavbarSimple } from "../components/Navbar";
import ResultsList from "../components/ResultsList";
import axios from "axios";
import { useAuthContext } from "../AuthContext/Auth";

export const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const { profile } = useAuthContext();

  const handleDelete = (data) => {
    //handle to delete
    //this needs to be there to be fed in to ResultsList
    console.log("cannot do");
  };

  useEffect(() => {
    axios
      .get(`http://172.17.0.1:8080/users/${profile}`)
      .then((response) => {
        // Use the data returned from the server (list of bookings)
        setBookings(response.data.details);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
    // refresh page here
  }, []);

  return (
    <div>
      <NavbarSimple />
      <ResultsList results={bookings} handleClick={handleDelete} />
      <h3 className="text-2xl font-semibold">Click to delete the booking</h3>
      {/* <ResultsList results={bookings} handleClick={handleDelete}/> */}
    </div>
  );
};
