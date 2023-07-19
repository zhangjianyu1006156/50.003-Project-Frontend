import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "./AuthContext/Auth";

function Client() {
  const [message, setMessage] = useState("");
  const { user } = useAuthContext();

  //post function for the data from user
  //this useeffect runs when user changes i.e. when user clicks login with google
  //   useEffect(() => {
  //     console.log("geronimo is testing to send a post request");
  //     if (user) {
  //       console.log("geronimo has sent a post request");
  //       axios
  //         .post("http://localhost:8000/profile", { key: user })
  //         .then((res) => {
  //           console.log(res);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //   }, [user]);
  //i need a fetch function to take back profile data

  //this use effect runs on reload
  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">{message}</h1>
    </div>
  );
}

export default Client;
