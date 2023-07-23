import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar } from "@material-tailwind/react";
import { useAuth } from "../AuthContext/useAuth";


export const Booking = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    const location = useLocation();

    const handleLogout = () => {
        auth.logOut();
      };
    
    const handleClick = (data) => {
        navigate("/search");
      };




    return(
        <div>
            <h1 className='w-full h-full flex font-bold text-3xl p-4'>
            This is your booking page.
                </h1>
                <form className='w-full'>
                <button className='w-full my-4' onClick={handleLogout}>Log out</button>
                <button className='w-full my-4' onClick={handleClick}>Search</button>
          </form>
        </div>

    );

};