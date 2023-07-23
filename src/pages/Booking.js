import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';


export const Booking = () => {
    const navigate = useNavigate();

    const location = useLocation();

    return(
        <div>
            <h1 className='w-full h-full flex font-bold text-3xl p-4'>
            This is your booking page.
                </h1>
        </div>

    )

};