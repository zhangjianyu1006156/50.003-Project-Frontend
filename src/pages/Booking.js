import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar } from "@material-tailwind/react";
import { useAuth } from "../AuthContext/useAuth";


export const Booking = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    const [bookings, setBookings] = useState([]);
    
    const handleDelete = (data) => {
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
