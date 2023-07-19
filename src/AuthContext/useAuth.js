import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [user, setUser] = useLocalStorage("user", null); // for data persistance with user name. no sure exactly what to do with this yet
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

  useEffect(() => {
    console.log("geronimo is testing to send a post request");
    if (user) {
      console.log("geronimo has sent a post request");
      axios
        .post("http://localhost:8000/profile", { key: user })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setUser(null);
    setProfile(null);
    console.log(user);
    navigate("/");
    localStorage.clear();
  };

  return { user, profile, login, logOut };
};
