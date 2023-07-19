//can delete if all works
import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GoogleLogin({stateChanger}) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => handleUserlogin(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  function handleUserlogin(codeResponse) {
    setUser(codeResponse);
    stateChanger(codeResponse);
    // localStorage.setItem("user", codeResponse)
    navigate("/results");
    console.log("Success");
  }

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setUser(null);
    stateChanger(null);
    setProfile(null);
  };

  return (
    <div className="auth-form-container">
      <h2 className="font-bold text-3xl">TRIPFUSION</h2>
      {profile ? (
        <div>
          <img src={profile.picture} alt="dp" referrerPolicy="no-referrer" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        // this portion is a button taken from google
        <div className="flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => login()}
            className="w-full justify-center text-black bg-[#a2aab7] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-center text-base p-[15px] inline-flex items-center dark:focus:ring-[#4285F4]/55 m-2"
          >
            <svg
              className="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
}
export default GoogleLogin;
