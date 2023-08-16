import React, {useState, useEffect } from "react";
import React, {useState, useEffect } from "react";
import { NavbarSimple } from "../components/Navbar";
import { ResultsList } from "../components/ResultsList"


export const Booking = () => {

    const [bookings, setBookings] = useState([]);
    
    const handleDelete = (data) => {
        // handle delete
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

    return(
        <div>
            <NavbarSimple/>
            <h3 className="text-2xl font-semibold text-gray-600">Click to delete any booking</h3>
            <ResultsList results={bookings} handleClick={handleDelete}/> */
        </div>
    )
};
