import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuthContext } from "./AuthContext/Auth";

export const Glogin = () => {
  //const auth = useAuth();
  const { login } = useAuthContext();

  const Login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      login(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <div className="auth-form-container">
      <h2 className="font-bold text-5xl mb-2">TRIPFUSION</h2>
      <div className="flex flex-col items-center justify-center">
        <button
          type="button"
          onClick={Login}
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
    </div>
  );
};
