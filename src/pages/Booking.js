import React, {useState, useEffect } from "react";
import { NavbarSimple } from "../components/Navbar";
import ResultsList from "../components/ResultsList";
import axios from "axios";
import { useAuthContext } from "../AuthContext/Auth";

export const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const { profile } = useAuthContext();
    
    const handleDelete = (data) => {
        // handle delete
    };
    useEffect(() => {
        axios
          .get(`http://188.166.191.110.nip.io:8080/users/${profile}`)
          .then((response) => {
            // Use the data returned from tshe server (list of bookings)
            setBookings(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            // Handle any errors that occurred during the request
            console.error(error);
          });
        // refresh page here
      }, []);
    

    // useEffect(() => {
    //     GetBookings(setBookings, null);
    //      // refresh page here
    //   }, [GetBookings]);

    return(
        <div>
            <NavbarSimple/>
            <h3 className="text-2xl font-semibold text-gray-600">Click to delete any booking</h3>
            <ResultsList results={bookings} handleClick={handleDelete}/> */
        </div>
    )
};