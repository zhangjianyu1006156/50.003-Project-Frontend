import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [user, setUser] = useState(null); // for data persistance with user name. no sure exactly what to do with this yet
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      setUser(data);
      navigate("/results");
    } catch (err) {
      console.log("Failed to sign ins");
    }
  };
  console.log(user);

  useEffect(() => {
    if (user) {
      console.log("i finally updated");
    }
  }, [user]);
  //   useEffect(() => {
  //     if (user) {
  //       axios
  //         .get(
  //           `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${user.access_token}`,
  //               Accept: "application/json",
  //             },
  //           }
  //         )
  //         .then((res) => {
  //           setProfile(res.data);
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   }, [user]);

  const logOut = () => {
    setUser(null);
    setProfile(null);
    navigate("/");
  };

  return { user, profile, login, logOut };
};
