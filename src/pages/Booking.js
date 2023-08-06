import { React, useState } from "react";
import { NavbarSimple } from "../components/Navbar";
import { ResultsList } from "../components/ResultsList"


export const Booking = () => {

    const [bookings, setBookings] = useState([]);
    
    const handleDelete = (data) => {
        // handle delete
    };

    // useEffect(() => {
    //     GetBookings(setBookings, null);
    //      // refresh page here
    //   }, [GetBookings]);

    return(
        <div>
            <NavbarSimple/>
            <h3 className="text-2xl font-semibold text-gray-600">Click to delete any booking</h3>
            {/* <ResultsList results={bookings} handleClick={handleDelete}/> */}
        </div>
    )
};