import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [user, setUser] = useLocalStorage("user", null); // for data persistance with user name. no sure exactly what to do with this yet
  const [profile, setProfile] = useLocalStorage("profile", null);
  const [bookings, setBookings] = useLocalStorage("bookings", null);
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      setUser(data);
      navigate("/search");
    } catch (err) {
      console.log("Failed to sign in:", err);
      console.log("Failed to sign in:", err);
    }
  };

  useEffect(() => {
    if (user) {
      console.log("i finally updated");
    }
  }, [user]);

  useEffect(() => {
    console.log("geronimo is testing to send a post request");
    if (user) {
      console.log("geronimo has sent a post request");
      axios
        .post("http://188.166.191.110.nip.io:8080/users/profile", { key: user})
        .then((res) => {
          console.log(res.data.result);
          setProfile(res.data.result);
          console.log(res.data.result);
          setProfile(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user, setProfile]);
  }, [user, setProfile]);

  const logOut = () => {
    googleLogout();
    setUser(null);
    setProfile(null);
    navigate("/");
    localStorage.clear();
  };

  return { user, profile, login, logOut, bookings, setBookings};
};
